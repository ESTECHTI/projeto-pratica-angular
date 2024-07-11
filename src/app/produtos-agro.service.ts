import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ProdutosAgroService  {
  private unidadeMedidaMap: { [key: string]: string } = {
    '1': 'Valor para Opção 1',
    '2': 'Valor para Opção 2',
    '3': 'Valor para Opção 3'
  };

  getDeUnidadeMedida(key: string): string {
    console.log("unidadeMedida " + JSON.stringify(key));
    return this.unidadeMedidaMap[key] || '';
  }
}
