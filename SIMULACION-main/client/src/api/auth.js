import axios from './axios'


export const UserCreate =user => axios.post(`/crearusuarios`,user);

export const calculateICM =icm => axios.post(`/calcular-icm`,icm);

