 
````markdown
# Aprendendo Flexbox e Grid no CSS Puro antes do Bootstrap

## Por que aprender CSS primeiro?
Se você aprender **Flexbox** e **Grid** diretamente no CSS, sua vida no Bootstrap fica muito mais fácil.  
Isso porque o Bootstrap é construído em cima dessas duas tecnologias.  
Ou seja, no Bootstrap você vai usar **atalhos de classes prontas** para aplicar propriedades que já conhece no CSS.

---

## Bootstrap usa Flexbox ou Grid?
- O **sistema de colunas do Bootstrap** (`row`, `col-6`, `col-12`, etc.) é baseado em **Flexbox**.  
- O **Grid Layout nativo do CSS** também é suportado no Bootstrap (desde a versão 5), mas é opcional.  
- Na prática, você usará muito mais **Flexbox** via classes utilitárias.  

---

## Como mover o conhecimento do CSS padrão para o Bootstrap?
1. Pense em cada classe do Bootstrap como um **atalho para uma propriedade CSS**.  
2. Se você já entende a propriedade (`justify-content`, `align-items`, `gap`, etc.), fica fácil identificar qual classe usar.  
3. A diferença é que no Bootstrap você aplica classes em vez de escrever CSS.

---

## Exemplo prático

### CSS Puro (Grid com 3 colunas)
```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
````

```html
<div class="grid">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

### Bootstrap (Grid de 3 colunas)

```html
<div class="row g-3">
  <div class="col">Item 1</div>
  <div class="col">Item 2</div>
  <div class="col">Item 3</div>
</div>
```

---

## Tabela: CSS Puro vs Bootstrap

| Conceito                   | CSS Puro                                           | Bootstrap Classe(s)                    |
| -------------------------- | -------------------------------------------------- | -------------------------------------- |
| Transformar em Flexbox     | `display: flex;`                                   | `d-flex`                               |
| Direção dos itens          | `flex-direction: row;` / `flex-direction: column;` | `flex-row` / `flex-column`             |
| Centralizar horizontal     | `justify-content: center;`                         | `justify-content-center`               |
| Centralizar vertical       | `align-items: center;`                             | `align-items-center`                   |
| Espaço entre itens         | `gap: 20px;`                                       | `gap-3` (ou `g-3` para grid e flex)    |
| Criar grid (3 colunas)     | `grid-template-columns: auto auto auto;`           | `row` + `col` (ou `col-4 col-4 col-4`) |
| Definir largura da coluna  | `width: 50%;`                                      | `col-6`                                |
| Definir largura automática | `flex: 1;`                                         | `flex-fill`                            |
| Ordem dos itens            | `order: 2;`                                        | `order-2`                              |
| Tornar item flexível       | `flex-grow: 1;`                                    | `flex-grow-1`                          |

---

## Conclusão

* Aprender Flexbox e Grid em **CSS puro** é o caminho certo.
* No Bootstrap você só aplica **atalhos via classes** para as propriedades que já domina.
* Dessa forma, você ganha velocidade e não fica dependente apenas do framework.


