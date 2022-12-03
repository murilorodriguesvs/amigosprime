function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (event)=>{
        if(event.target.id == modalID || event.target.id == 'fechar'){
            modal.classList.remove('mostrar')
        }
    })
}

const cardapio = document.querySelector('.cardapio')
const bebida = document.querySelector('.bebida')

cardapio.addEventListener('click', () => {
    iniciaModal('modal_cardapio')
})

bebida.addEventListener('click', ()=>{
    iniciaModal('modal_bebida')
})