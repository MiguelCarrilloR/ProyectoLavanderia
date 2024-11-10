import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow, Paper, TextField, Button, Modal, Box, MenuItem
} from '@mui/material';
import './BillingPage.css';
import { useNavigate } from 'react-router-dom';

function BillingPage() {
    const [openModal, setOpenModal] = useState(false);
    const [items, setItems] = useState([{ cantidad: 1, descripcion: '', valor: 0 }]);

    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);
    const navigate = useNavigate();


    const handleBack = () => {
        navigate("/home")
    };

    const handleAddItem = () => {
        setItems([...items, { cantidad: 1, descripcion: '', valor: 0 }]);
    };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...items];
        updatedItems[index][field] = value;
        setItems(updatedItems);
    };

    const totalPrendas = items.reduce((sum, item) => sum + parseInt(item.cantidad || 0), 0);
    const totalValor = items.reduce((sum, item) => sum + (item.cantidad * item.valor), 0);

    return (
        <div className="billing-page">
            <header className="header-container">
                <div className="header-left">
                    <Button onClick={handleBack} variant="outlined" className="back-button">
                        <span>Atrás</span>
                    </Button>
                </div>

                <div className="header-center">
                    <img src="https://i.imgur.com/esKP4yV.png" alt="Lavaseco Primavera Logo" className="logo" />
                    <div className="facturacion">
                        <img src="https://i.imgur.com/EPNITMk.png" alt="Imagen adicional" className="extra-image" />
                        <h1>Facturación</h1>
                    </div>
                </div>

                <div className="header-right">
                    <Button variant="outlined" className="admin-button">
                        <span>Administrador</span>
                    </Button>
                </div>
            </header>

            <main className="main-content">
                <div className="filters">
                    <TextField label="Fecha" type="date" InputLabelProps={{ shrink: true }} />
                    <TextField label="Numero De Factura" variant="outlined" />
                    <TextField label="Codigo de factura" variant="outlined" />
                    <Button variant="contained" color="success" onClick={handleOpenModal}>
                        Nueva factura
                    </Button>
                </div>

                <TableContainer component={Paper} className="table-container">
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Fecha</TableCell>
                                <TableCell>Código</TableCell>
                                <TableCell>Estado</TableCell>
                                <TableCell>Acciones</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {[
                                { fecha: '24/02/2023', codigo: '32089', estado: 'En espera' },
                                { fecha: '24/02/2023', codigo: '32089', estado: 'Entregado' },
                                { fecha: '24/02/2023', codigo: '32089', estado: 'En espera' },
                                { fecha: '24/02/2023', codigo: '32089', estado: 'Entregado' },
                                { fecha: '24/02/2023', codigo: '32089', estado: 'En espera' },
                            ].map((row, index) => (
                                <TableRow key={index} className={index % 2 === 0 ? "table-row-odd" : ""}>
                                    <TableCell>{row.fecha}</TableCell>
                                    <TableCell>{row.codigo}</TableCell>
                                    <TableCell style={{ color: row.estado === 'Entregado' ? 'green' : 'red' }}>
                                        {row.estado}
                                    </TableCell>
                                    <TableCell>
                                        <Button variant="text" color="error">🗑️</Button>
                                        <Button variant="text" color="primary">✏️</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <div className="pagination">
                    <Button variant="text">«</Button>
                    <Button variant="text" className="page-number active">1</Button>
                    <Button variant="text" className="page-number">2</Button>
                    <Button variant="text" className="page-number">3</Button>
                    <Button variant="text">...</Button>
                    <Button variant="text" className="page-number">10</Button>
                    <Button variant="text">»</Button>
                </div>

                <Modal open={openModal} onClose={handleCloseModal}>
                    <Box className="modal-box">
                        <h2>Nueva Factura</h2>
                        {items.map((item, index) => (
                            <div key={index} className="item-row">
                                <TextField
                                    label="Cantidad"
                                    type="number"
                                    value={item.cantidad}
                                    onChange={(e) => handleItemChange(index, 'cantidad', e.target.value)}
                                    className="input-field"
                                />
                                <TextField
                                    label="Descripción"
                                    select
                                    value={item.descripcion}
                                    onChange={(e) => handleItemChange(index, 'descripcion', e.target.value)}
                                    className="input-field"
                                >
                                    <MenuItem value="Camiseta">Camiseta</MenuItem>
                                    <MenuItem value="Pantalon">Pantalon</MenuItem>
                                </TextField>
                                <TextField
                                    label="Valor"
                                    type="number"
                                    value={item.valor}
                                    onChange={(e) => handleItemChange(index, 'valor', e.target.value)}
                                    className="input-field"
                                />
                            </div>
                        ))}
                        <Button onClick={handleAddItem} color="primary">Agregar +</Button>

                        <div className="total-section">
                            <TextField
                                label="Total De Prendas"
                                value={totalPrendas}
                                InputProps={{ readOnly: true }}
                            />
                            <TextField
                                label="Total"
                                value={`$ ${totalValor.toFixed(2)}`}
                                InputProps={{ readOnly: true }}
                            />
                        </div>

                        <Button variant="contained" color="success" onClick={handleCloseModal} className="add-invoice-button">
                            Agregar factura
                        </Button>
                    </Box>
                </Modal>
            </main>
        </div>
    );
}

export default BillingPage;
