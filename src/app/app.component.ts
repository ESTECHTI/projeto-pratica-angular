import { Component } from '@angular/core';
import { ProdutosAgroService } from './produtos-agro.service';
import { ProdutoAgropecuarioVO } from './produto-agropecuario-vo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-pratica-angular';
  val1 = 'number';

  produtoAgropecuarioVO: ProdutoAgropecuarioVO = new ProdutoAgropecuarioVO('');

  opcoes: any[] = [
    { label: 'Opção 1', value: '1' },
    { label: 'Opção 2', value: '2' },
    { label: 'Opção 3', value: '3' }
  ];

  tabelaItens = [
    { nome: 'Item 1', valor: 'valor1' },
    { nome: 'Item 2', valor: 'valor2' },
    { nome: 'Item 3', valor: 'valor3' }
  ];

  showModal = false;
  selectedOption: any;

  constructor( private produtosAgroService: ProdutosAgroService) {}

  abrirModal(item: any) {
    this.selectedOption = item.valor; // Define o valor selecionado no p-dropdown
    this.showModal = true; // Abre o modal
  }

  fecharModal() {
    this.showModal = false; // Fecha o modal
  }

  onChange(event: any) {
    const selectedValue = event.value;
    this.produtoAgropecuarioVO.deUnidadeMedida = this.produtosAgroService.getDeUnidadeMedida(selectedValue);
  }
}
