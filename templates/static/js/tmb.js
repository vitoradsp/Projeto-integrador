
function gasto_dia(valor_tmb,n_atividade){
    if (n_atividade == 'Sedentario') {
        let gasto_total = parseInt(valor_tmb * 1.3 );
        return gasto_total;
    }
    else if (n_atividade == 'Moderamente Ativo') {
        let gasto_total = parseInt(valor_tmb * 1.5) ;   
        return gasto_total;
    }
    else{
        let gasto_total = parseInt(valor_tmb * 1.8 );   
        return gasto_total;
    }return gasto_total;
}; 
function botao_gerar(){
    const erros = document.getElementById('messagem_javascript')
    let local_de_valores_tmb = document.querySelector('.valor_tmb');
    let botao_gerar_tmb = document.querySelector('#btn_tmb');
    local_de_valores_tmb.style.display= "flex"; 
    let local_tmb_parado=  document.getElementById('gasto_parado_javascript');
    let local_objetivo=document.getElementById('objetivo_javascript');
    let local_caloria_total=document.getElementById('valor_total_de_calorias_javascript');
    let peso=document.getElementById('peso_user').value;
    let altura=document.getElementById('height_user').value;
    let idade=document.getElementById('age_user').value;
    let n_atividade=document.getElementById('nivel_de_ati_user').value;
    let objetivo=document.getElementById('objetivo_user').value;
    let masculino=document.getElementById('user_masculino').value;
    let feminino=document.getElementById('user_feminino').value;   
    if(masculino.value == 'masculino'  ){
        let tmb_masculino = parseInt( 66 + ( 13.7 * peso ) + (  5.0 * altura ) - ( 6.8 * idade )) ;
        local_tmb_parado.innerText = tmb_masculino;
        local_objetivo.innerText = objetivo;
        let gasto_total_user = gasto_dia(tmb_masculino,n_atividade);
        console.log(gasto_total_user)
        if( objetivo === 'Manter'){
            let total_caloria_user = local_caloria_total.innerText =parseInt( gasto_total_user);
            console.log(total_caloria_user)
            let local_backend=document.getElementById('local_dados_do_user');
        }else if( objetivo === 'Cutting'){
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user - 500) ;
            console.log(total_caloria_user)
            let local_backend=document.getElementById('local_dados_do_user');
        }else{
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user + 500);
            console.log(total_caloria_user)
            let local_backend=document.getElementById('local_dados_do_user');
        };
    }else{
        let tmb_feminino = parseInt ( 665+( 9.6 * peso ) + ( 1.8 * altura) - ( 4.7 * idade )) ;
        local_tmb_parado.innerText = tmb_feminino;
        local_objetivo.innerText = objetivo;
        let gasto_total_user = gasto_dia(tmb_feminino,n_atividade);
        console.log(gasto_total_user)
        if( objetivo === 'Manter'){
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user);
            let local_backend=document.getElementById('local_dados_do_user');
            console.log(total_caloria_user)
        }else if( objetivo === 'Cutting'){
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user - 500) ;
            console.log(total_caloria_user)
            let local_backend=document.getElementById('local_dados_do_user');
        }else{
            let total_caloria_user = local_caloria_total.innerText = parseInt(gasto_total_user + 500);
            console.log(total_caloria_user)
            let local_backend=document.getElementById('local_dados_do_user');
        };
    };
};
