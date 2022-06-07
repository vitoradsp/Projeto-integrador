
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
    let local_gasto_dia =document.getElementById('gasto_dia_js');
    let local_caloria_total=document.getElementById('valor_total_de_calorias_javascript');
    let peso=document.getElementById('peso_user').value;
    let altura=document.getElementById('height_user').value;
    let idade=document.getElementById('age_user').value;
    let n_atividade=document.getElementById('nivel_de_ati_user').innerText;
    let objetivo=document.getElementById('objetivo_user').innerText;
    console.log(n_atividade,objetivo)
    let masculino=document.getElementById('user_masculino').value;
    let feminino=document.getElementById('user_feminino').value;   
    if(masculino.value == 'masculino'  ){
        let tmb_masculino = parseInt( 66 + ( 13.7 * parseInt(peso) ) + (  5.0 * parseInt(altura) ) - ( 6.8 * parseInt(idade) )) ;
        local_tmb_parado.innerText = tmb_masculino;
        local_objetivo.innerText = objetivo;
        let gasto_total_user = gasto_dia(tmb_masculino,n_atividade);
        local_gasto_dia.innerText=gasto_total_user;
        if( objetivo === 'Manter'){
            let total_caloria_user = local_caloria_total.innerText =parseInt( gasto_total_user);
            let proteina_user=parseInt(Number(peso)*2);
            let gordura_user=parseInt(Number(peso)*1.5);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1);
            let=sexo_user='Masculino';
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_masculino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
            console.log(local_backend.value);
        }else if( objetivo === 'Cutting'){    
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user - 500) ;
            let proteina_user=parseInt(Number(peso)*2.2);
            let gordura_user=parseInt(Number(peso)*1);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1);
            let=sexo_user='Masculino';
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_masculino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
            console.log(local_backend.value);
        }else{
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user + 500);
            let proteina_user=parseInt(Number(peso)*2);
            let gordura_user=parseInt(Number(peso)*2);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1);
            let=sexo_user='Masculino'
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_masculino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
        };
    }else{
        let tmb_feminino = parseInt ( 665+( 9.6 * parseInt(peso) ) + ( 1.8 * parseInt(altura)) - ( 4.7 * parseInt(idade) )) ;
        local_tmb_parado.innerText = tmb_feminino;
        local_objetivo.innerText = objetivo;
        let gasto_total_user = gasto_dia(tmb_feminino,n_atividade);
        local_gasto_dia.innerText = gasto_total_user;
        if( objetivo === 'Manter'){
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user);
            let proteina_user=parseInt(Number(peso)*2);
            let gordura_user=parseInt(Number(peso)*1.5);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1)
            let=sexo_user='Feminino'
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_feminino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
        }else if( objetivo === 'Cutting'){
            let total_caloria_user =local_caloria_total.innerText = parseInt(gasto_total_user - 500) ;
            let proteina_user=parseInt(Number(peso)*2.2);
            let gordura_user=parseInt(Number(peso)*1);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1);
            let=sexo_user='Feminino';
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_feminino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
        }else{
            let total_caloria_user = local_caloria_total.innerText = parseInt(gasto_total_user + 500);
            let proteina_user=parseInt(Number(peso)* 2);
            let gordura_user=parseInt(Number(peso)*2);
            let carboidrato_user=parseInt(((((proteina_user*4)+(gordura_user*9))-total_caloria_user)/4)*-1);
            let=sexo_user='Feminino'
            let local_backend=document.getElementById('local_dados_do_user');
            local_backend.value=[tmb_feminino,gasto_total_user,total_caloria_user,proteina_user,gordura_user,carboidrato_user,sexo_user];
        };
    };
};
