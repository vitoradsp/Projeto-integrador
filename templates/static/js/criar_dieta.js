console.log('javascript entrou')
/* calculos abaixo sobre refeições */

alimentos_refeicao=function(numero_da_ref){
    switch (numero_da_ref) {
        case 1:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_1')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_1')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_1')
            break;
        case 2:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_2')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_2')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_2')
            break;
        case 3:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_3')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_3')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_3')
            break;
        case 4:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_4')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_4')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_4')
            break;
        case 5:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_5')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_5')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_5')
            break;
        case 6:
            alimentos_1=document.getElementById('alimentos_linha_1_ref_6')
            alimentos_2=document.getElementById('alimentos_linha_2_ref_6')
            alimentos_3=document.getElementById('alimentos_linha_3_ref_6')
            break;
    };
    let alimentos =[alimentos_1,alimentos_2,alimentos];
    return alimentos
}
macros_refeicao = function(numero_da_ref){
    let alimentos=alimentos_refeicao(numero_da_ref);
    let alimento_row_1= alimentos[0];
    let alimento_row_2= alimentos[1];
    let alimento_row_3= alimentos[2];

}
function adicionar(this){
    let alimento = this ;
    let alimento_da_ref_1_row_1 = document.getElementById('alimentos_linha_1_ref_1').innerHTML;
    let alimento_da_ref_1_row_2 = document.getElementById('alimentos_linha_2_ref_1').innerHTML;
    let alimento_da_ref_1_row_3 = document.getElementById('alimentos_linha_3_ref_1').innerHTML;
    if(alimento_da_ref_1_row_1 ==''){
        let alimento_da_ref_1_row_1=document.getElementById('alimentos_linha_1_ref_1').innerText=alimento;
    }
    else if(alimento_da_ref_1_row_2 ==''){
        let alimento_da_ref_1_row_2=document.getElementById('alimentos_linha_2_ref_1').innerText=alimento;
    }else{
        let alimento_da_ref_1_row_3=document.getElementById('alimentos_linha_3_ref_1').innerText=alimento;
    }
};
function macros_dieta_user(){
    let proteina_max_diet =document.getElementById('valores_total_de_proteina').innerHTML;
    let gordura_max_diet =document.getElementById('valores_total_de_gordura').innerHTML;
    let carboidratos_max_diet = document.getElementById('valores_total_de_carboidratos').innerHTML;
    let calorias_max_diet = document.getElementById('valor_total_das_kcal').innerHTML;
    let quantidade_refeicao = document.getElementById('quantidade_de_refeicoes').value;
    let quantidade_max_proteica_ref = document.getElementById('proteina_max_ref_user').innerText = parseInt(proteina_max_diet/quantidade_refeicao);
    let quantidade_max_gordura_ref = document.getElementById('gordura_max_ref_user').innerText=parseInt(gordura_max_diet/quantidade_refeicao);
    let quantidade_max_carboidratos_ref = document.getElementById('carboidratos_max_ref_user').innerText=parseInt(carboidratos_max_diet/ quantidade_refeicao);
    let quantidade_max_calorias_ref = document.getElementById('calorias_max_ref_user').innerText=parseInt(calorias_max_diet/ quantidade_refeicao);
};