import Marca from './brand';

export default class Tshirt {
    marca = new Marca();
    constructor ( id, marca, tamanho, cor ) {
        this.id = id;
        this.marca = marca;
        this.tamanho = tamanho;
        this.cor = cor;
    }
}