import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ProdutosAgroService } from './produtos-agro.service';
import { DropdownModule, Dropdown } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let produtosAgroService: ProdutosAgroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppComponent ],
      imports: [
        DropdownModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        TableModule,
        BrowserAnimationsModule,
        NoopAnimationsModule // Utilizado para desabilitar animações para testes
      ],
      providers: [ ProdutosAgroService ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    produtosAgroService = TestBed.inject(ProdutosAgroService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should open the modal when abrirModal is called', () => {
    component.abrirModal({ nome: 'Item 1', valor: '1' });
    expect(component.showModal).toBeTrue();
    expect(component.selectedOption).toBe('1');
  });

  it('should close the modal when fecharModal is called', () => {
    component.showModal = true;
    component.fecharModal();
    expect(component.showModal).toBeFalse();
  });

  it('should update deUnidadeMedida when onChange is called', () => {
    const unidadeMedida = 'Valor para Opção 1';
    spyOn(produtosAgroService, 'getDeUnidadeMedida').and.returnValue(unidadeMedida);

    component.onChange({ value: '1' });

    expect(produtosAgroService.getDeUnidadeMedida).toHaveBeenCalledWith('1');
    expect(component.produtoAgropecuarioVO.deUnidadeMedida).toBe(unidadeMedida);
  });

  it('should populate the p-dropdown options correctly', async () => {
    fixture.detectChanges(); // Ensure the DOM is updated

     // Selecionar o componente p-dropdown
     const dropdownDebugElement: DebugElement = fixture.debugElement.query(By.css('p-dropdown'));
     if (!dropdownDebugElement) {
       console.error('p-dropdown não encontrado');
     } else {
       const dropdownComponent: Dropdown = dropdownDebugElement.componentInstance;
       console.log('Dropdown Component:', dropdownComponent);

       // Abrir o dropdown para renderizar as opções
       dropdownComponent.overlayVisible = true;
       fixture.detectChanges();

       // Esperar até que as opções sejam renderizadas
       await fixture.whenStable();
       fixture.detectChanges();

       const dropdownItems = fixture.nativeElement.querySelectorAll('.p-dropdown-item');
       expect(dropdownItems.length).toBe(3);
     }
  });
});
