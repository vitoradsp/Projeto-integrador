

function refeicoes_quanti(quantidade){
  console.log(quantidade)
  switch (Number(quantidade)){
    case 2:
      /*pego as refeiçôes */
      let ref_tree_case1 = document.querySelector('.refeicoes_user_tree');
      let ref_four_case1 = document.querySelector('.refeicoes_user_four');
      let ref_five_case1 = document.querySelector('.refeicoes_user_five');
      let ref_six_case1 = document.querySelector('.refeicoes_user_six');
      /*pego as refeiçôes e coloco em display none */
      ref_tree_case1.style.display = "none" ;
      ref_four_case1.style.display = "none" ;
      ref_five_case1.style.display = "none" ;
      ref_six_case1.style.display = "none" ;
      break;
    case 3:
      console.log("entrou no 3")
      /*pego as refeiçôes */
      let ref_four_case2 = document.querySelector(".refeicoes_user_four");
      let ref_five_case2 = document.querySelector(".refeicoes_user_five");
      let ref_six_case2 = document.querySelector(".refeicoes_user_six");
      /*pego as refeiçôes e coloco em display none */
      ref_four_case2.style.display = "none" ;
      ref_five_case2.style.display = "none" ;
      ref_six_case2.style.display = "none" ;
      break;
    case 4:
      /*pego as refeiçôes */
      let ref_five_case3 = document.querySelector(".refeicoes_user_five");
      let ref_six_case3 = document.querySelector(".refeicoes_user_six");
      /*pego as refeiçôes e coloco em display none */
      ref_five_case3.style.display = "none" ;
      ref_six_case3.style.display = "none" ;
      break;
    case 5:
      /*pego as refeiçôes */
      let ref_six_case4 = document.querySelector(".refeicoes_user_six");
      /*pego as refeiçôes e coloco em display none */
      ref_six_case4.style.display = "none" ;
      break;
  };
};
/* calculos abaixo sobre refeições */
function macros_dieta_user() {
  let proteina_max_diet = document.getElementById("valores_total_de_proteina").innerHTML;
  let gordura_max_diet = document.getElementById("valores_total_de_gordura").innerHTML;
  let carboidratos_max_diet = document.getElementById("valores_total_de_carboidratos").innerHTML;
  let calorias_max_diet = document.getElementById("valor_total_das_kcal").innerHTML;
  let quantidade_refeicao = document.getElementById("quantidade_de_refeicoes").value;
  let calculo_de_ref=refeicoes_quanti(quantidade_refeicao);
  let quantidade_max_proteica_ref = (document.getElementById("proteina_max_ref_user").innerText = parseInt((proteina_max_diet*1.8) / quantidade_refeicao));
  let quantidade_max_gordura_ref = (document.getElementById("gordura_max_ref_user").innerText = parseInt(gordura_max_diet / quantidade_refeicao));
  let quantidade_max_carboidratos_ref = (document.getElementById("carboidratos_max_ref_user").innerText = parseInt(carboidratos_max_diet / quantidade_refeicao));
  let quantidade_max_calorias_ref = (document.getElementById("calorias_max_ref_user").innerText = parseInt(calorias_max_diet / quantidade_refeicao));
}

/* macros (passe o valor da rfeição)e ele calcular os macros*/

function adicionar_alimento(alimento_tabela) {
  let alimento_escolhido = alimento_tabela;
  let nome_do_alimento=alimento_escolhido.querySelector('#td_alimento_1').innerText;
  console.log(nome_do_alimento)
  let kcal_do_alimentos = alimento_escolhido.querySelector('.td_kcal').innerText;
  kcal_do_alimentos = kcal_do_alimentos.replace('kcal','');
  console.log(kcal_do_alimentos)
  let prot_do_alimentos=alimento_escolhido.querySelector('.td_prot').innerText;
  prot_do_alimentos = prot_do_alimentos.replace('g','');
  let gordura_do_alimentos = alimento_escolhido.querySelector('.td_gordura').innerText;
  gordura_do_alimentos = gordura_do_alimentos.replace('g','');
  let carboidratos_do_alimentos=alimento_escolhido.querySelector('.td_carb').innerText;
  carboidratos_do_alimentos=carboidratos_do_alimentos.replace('g','');

  /*refeiçao 1*/
  const alimento_da_ref_1_row_1 = document.getElementById(
    "alimentos_linha_1_ref_1"
  ).innerHTML;
  const alimento_da_ref_1_row_2 = document.getElementById(
    "alimentos_linha_2_ref_1"
  ).innerHTML;
  const alimento_da_ref_1_row_3 = document.getElementById(
    "alimentos_linha_3_ref_1"
  ).innerHTML;
  /*refeiçao 2*/
  const alimento_da_ref_2_row_1 = document.getElementById(
    "alimentos_linha_1_ref_2"
  ).innerHTML;
  const alimento_da_ref_2_row_2 = document.getElementById(
    "alimentos_linha_2_ref_2"
  ).innerHTML;
  const alimento_da_ref_2_row_3 = document.getElementById(
    "alimentos_linha_3_ref_2"
  ).innerHTML;
  /*refeiçao 3*/
  const alimento_da_ref_3_row_1 = document.getElementById(
    "alimentos_linha_1_ref_3"
  ).innerHTML;
  const alimento_da_ref_3_row_2 = document.getElementById(
    "alimentos_linha_2_ref_3"
  ).innerHTML;
  const alimento_da_ref_3_row_3 = document.getElementById(
    "alimentos_linha_3_ref_3"
  ).innerHTML;
  /*refeiçao 4*/
  const alimento_da_ref_4_row_1 = document.getElementById(
    "alimentos_linha_1_ref_4"
  ).innerHTML;
  const alimento_da_ref_4_row_2 = document.getElementById(
    "alimentos_linha_2_ref_4"
  ).innerHTML;
  const alimento_da_ref_4_row_3 = document.getElementById(
    "alimentos_linha_3_ref_4"
  ).innerHTML;
  /*refeiçao 5*/
  const alimento_da_ref_5_row_1 = document.getElementById(
    "alimentos_linha_1_ref_5"
  ).innerHTML;
  const alimento_da_ref_5_row_2 = document.getElementById(
    "alimentos_linha_2_ref_5"
  ).innerHTML;
  const alimento_da_ref_5_row_3 = document.getElementById(
    "alimentos_linha_3_ref_5"
  ).innerHTML;
  /*refeiçao 6*/
  const alimento_da_ref_6_row_1 = document.getElementById(
    "alimentos_linha_1_ref_6"
  ).innerHTML;
  const alimento_da_ref_6_row_2 = document.getElementById(
    "alimentos_linha_2_ref_6"
  ).innerHTML;
  const alimento_da_ref_6_row_3 = document.getElementById(
    "alimentos_linha_3_ref_6"
  ).innerHTML;
  if (alimento_da_ref_1_row_1 == "") {
    let LABEL_1 = document.getElementById("alimentos_linha_1_ref_1").innerText = nome_do_alimento;
    let nome = document.getElementById("alimento_total_row1_ref_1").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_1").value= kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_1").value=prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_1").value=gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_1").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_1_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_1").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_1").value=nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_1").value=kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_1").value=prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_1").value=gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_1").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_1_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_1").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_1").value=nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_1").value=kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_1").value=prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_1").value=gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_1").value=carboidratos_do_alimentos;
  } /*refeiçao 2*/ else if (alimento_da_ref_2_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_2").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row1_ref_2").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_2").value=kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_2").value=prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_2").value=gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_2").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_2_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_2").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_2").value=nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_2").value=kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_2").value=prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_2").value=gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_2").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_2_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_2").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_2").value=nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_2").value=kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_2").value=prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_2").value=gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_2").value=carboidratos_do_alimentos;
  } /*refeiçao 3*/ else if (alimento_da_ref_3_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_3").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row1_ref_3").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_3").value=kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_3").value=prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_3").value=gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_3").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_3_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_3").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_3").value=nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_3").value=kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_3").value=prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_3").value=gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_3").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_3_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_3").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_3").value=nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_3").value=kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_3").value=prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_3").value=gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_3").value=carboidratos_do_alimentos;
  } /*refeiçao 4*/ else if (alimento_da_ref_4_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_4").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row1_ref_4").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_4").value=kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_4").value=prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_4").value=gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_4").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_4_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_4").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_4").value=nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_4").value=kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_4").value=prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_4").value=gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_4").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_4_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_4").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_4").value=nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_4").value=kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_4").value=prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_4").value=gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_4").value=carboidratos_do_alimentos;

  } /*refeiçao 5*/ else if (alimento_da_ref_5_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_5").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row1_ref_5").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_5").value=kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_5").value=prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_5").value=gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_5").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_5_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_5").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_5").value=nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_5").value=kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_5").value=prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_5").value=gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_5").value=carboidratos_do_alimentos;
  } else if (alimento_da_ref_5_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_5").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_5").value=nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_5").value=kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_5").value=prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_5").value=gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_5").value=carboidratos_do_alimentos;

  } else if (alimento_da_ref_6_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_6").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row1_ref_6").value=nome_do_alimento;
    let kcal_1 = document.getElementById("kcal_total_row1_ref_6").value = kcal_do_alimentos;
    let prot_1 = document.getElementById("prot_total_row1_ref_6").value = prot_do_alimentos;
    let fat_1 = document.getElementById("gord_total_row1_ref_6").value = gordura_do_alimentos;
    let carb_1 = document.getElementById("carb_total_row1_ref_6").value = carboidratos_do_alimentos;
  } else if (alimento_da_ref_6_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_6").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row2_ref_6").value = nome_do_alimento;
    let kcal_2 = document.getElementById("kcal_total_row2_ref_6").value = kcal_do_alimentos;
    let prot_2 = document.getElementById("prot_total_row2_ref_6").value = prot_do_alimentos;
    let fat_2 = document.getElementById("gord_total_row2_ref_6").value = gordura_do_alimentos;
    let carb_2 = document.getElementById("carb_total_row2_ref_6").value = carboidratos_do_alimentos;
  } else if (alimento_da_ref_6_row_3 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_3_ref_6").innerText = nome_do_alimento);
    let nome = document.getElementById("alimento_total_row3_ref_6").value = nome_do_alimento;
    let kcal_3 = document.getElementById("kcal_total_row3_ref_6").value = kcal_do_alimentos;
    let prot_3 = document.getElementById("prot_total_row3_ref_6").value = prot_do_alimentos;
    let fat_3 = document.getElementById("gord_total_row3_ref_6").value = gordura_do_alimentos;
    let carb_3 = document.getElementById("carb_total_row3_ref_6").value = carboidratos_do_alimentos;
  } else {
    console.log("FIM");
  }
}

function macros_refeicao(numero_da_ref) {
  console.log(numero_da_ref)
  switch(Number(numero_da_ref)){
    case 1:
      /*valores alimento 1 */
      console.log('veio aqui')
      let kcal_1=document.getElementById('kcal_total_row1_ref_1').value;
      console.log(kcal_1)
      let prot_1=document.getElementById('prot_total_row1_ref_1').value;
      let gord_1=document.getElementById('gord_total_row1_ref_1').value;
      let carb_1=document.getElementById('carb_total_row1_ref_1').value;
      let quantidade_1=document.getElementById('quanti_row1_ref_1').value;
      console.log(quantidade_1)
      let conta_kcal_1=parseInt((Number(quantidade_1/100))*kcal_1)
      console.log(conta_kcal_1)
      let conta_prot_1=parseInt((quantidade_1/100)*prot_1)
      let conta_gord_1=parseInt((quantidade_1/100)*gord_1)
      let conta_carb_1=parseInt((quantidade_1/100)*carb_1)
      /*valores alimento 2 */
      let kcal_2 = document.getElementById('kcal_total_row2_ref_1').value;
      let prot_2 = document.getElementById('prot_total_row2_ref_1').value;
      let gord_2 = document.getElementById('gord_total_row2_ref_1').value;
      let carb_2 = document.getElementById('carb_total_row2_ref_1').value;
      let quantidade_2=document.getElementById('quanti_row2_ref_1').value;
      let conta_kcal_2 = parseInt((quantidade_2/100)*kcal_2)
      let conta_prot_2 = parseInt((quantidade_2/100)*prot_2)
      let conta_gord_2 = parseInt((quantidade_2/100)*gord_2)
      let conta_carb_2 = parseInt((quantidade_2/100)*carb_2)
      /*valores alimento 3 */
      let kcal_3 = document.getElementById('kcal_total_row3_ref_1').value;
      let prot_3 = document.getElementById('prot_total_row3_ref_1').value;
      let gord_3 = document.getElementById('gord_total_row3_ref_1').value;
      let carb_3 = document.getElementById('carb_total_row3_ref_1').value;
      let quantidade_3=document.getElementById('quanti_row3_ref_1').value;
      let conta_kcal_3 = parseInt((quantidade_3/100)*kcal_3)
      let conta_prot_3 = parseInt((quantidade_3/100)*prot_3)
      let conta_gord_3 = parseInt((quantidade_3/100)*gord_3)
      let conta_carb_3 = parseInt((quantidade_3/100)*carb_3)
      let totalkcal_1 = Number(conta_kcal_1+conta_kcal_2+conta_kcal_3);
      let totalprot_1 = Number(conta_prot_1+conta_prot_2+conta_prot_3);
      let totalgord_1 = Number(conta_gord_1+conta_gord_2+conta_gord_3);
      let totalcarb_1 = Number(conta_carb_1+conta_carb_2+conta_carb_3);
      if (quantidade_1==0 ||quantidade_2==0  ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_1==0||kcal_2==0){
        alert('Adicione Alimentos ')
      }
      /*valores que apareceram para o user */
      let caloria_do_one = document.getElementById("calorias_da_ref_one").innerText = totalkcal_1 ;
      let proteina_do_one = document.getElementById("proteina_da_ref_one").innerText = totalprot_1 ;
      let gordura_do_one = document.getElementById("gordura_da_ref_one").innerText = totalgord_1 ;
      let carboidratos_do_one_carb = document.getElementById("carboidratos_da_ref_one").innerText = totalcarb_1 ;
      break
    case 2:
      /*valores alimento 1 */
      let kcal_4=document.getElementById('kcal_total_row1_ref_2').value;
      let prot_4=document.getElementById('prot_total_row1_ref_2').value;
      let gord_4=document.getElementById('gord_total_row1_ref_2').value;
      let carb_4=document.getElementById('carb_total_row1_ref_2').value;
      let quantidade_4=document.getElementById('quanti_row1_ref_2').value;
      let conta_kcal_4=parseInt((quantidade_4/100)*kcal_4)
      let conta_prot_4=parseInt((quantidade_4/100)*prot_4)
      let conta_gord_4=parseInt((quantidade_4/100)*gord_4)
      let conta_carb_4=parseInt((quantidade_4/100)*carb_4)
      /*valores alimento 2 */
      let kcal_5 = document.getElementById('kcal_total_row2_ref_2').value;
      let prot_5 = document.getElementById('prot_total_row2_ref_2').value;
      let gord_5 = document.getElementById('gord_total_row2_ref_2').value;
      let carb_5 = document.getElementById('carb_total_row2_ref_2').value;
      let quantidade_5=document.getElementById('quanti_row2_ref_2').value;
      let conta_kcal_5 = parseInt((quantidade_5/100)*kcal_5)
      let conta_prot_5 = parseInt((quantidade_5/100)*prot_5)
      let conta_gord_5 = parseInt((quantidade_5/100)*gord_5)
      let conta_carb_5 = parseInt((quantidade_5/100)*carb_5)
      /*valores alimento 3 */
      let kcal_6 = document.getElementById('kcal_total_row3_ref_2').value;
      let prot_6 = document.getElementById('prot_total_row3_ref_2').value;
      let gord_6 = document.getElementById('gord_total_row3_ref_2').value;
      let carb_6 = document.getElementById('carb_total_row3_ref_2').value;
      let quantidade_6=document.getElementById('quanti_row3_ref_2').value;
      let conta_kcal_6 = parseInt((quantidade_6/100)*kcal_6)
      let conta_prot_6 = parseInt((quantidade_6/100)*prot_6)
      let conta_gord_6 = parseInt((quantidade_6/100)*gord_6)
      let conta_carb_6 = parseInt((quantidade_6/100)*carb_6)
      /*valores que apareceram para o user */
      if (quantidade_4==0 ||quantidade_5==0   ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_4==0||kcal_5==0){
        alert('Adicione Alimentos ')
      }
      let totalkcal_2 = Number(conta_kcal_4+conta_kcal_5+conta_kcal_6);
      let totalprot_2 = Number(conta_prot_4+conta_prot_5+conta_prot_6);
      let totalgord_2 = Number(conta_gord_4+conta_gord_5+conta_gord_6);
      let totalcarb_2 = Number(conta_carb_4+conta_carb_5+conta_carb_6);
      let caloria_do_two = document.getElementById("calorias_da_ref_two").innerText = totalkcal_2 ;
      let proteina_do_two = document.getElementById("proteina_da_ref_two").innerText = totalprot_2 ;
      let gordura_do_two = document.getElementById("gordura_da_ref_two").innerText = totalgord_2 ;
      let carboidratos_do_two = document.getElementById("carboidratos_da_ref_two").innerText = totalcarb_2 ;
      break
    case 3:
      /*valores alimento 1 */
      let kcal_7=document.getElementById('kcal_total_row1_ref_3').value;
      let prot_7=document.getElementById('prot_total_row1_ref_3').value;
      let gord_7=document.getElementById('gord_total_row1_ref_3').value;
      let carb_7=document.getElementById('carb_total_row1_ref_3').value;
      let quantidade_7=document.getElementById('quanti_row1_ref_3').value;
      let conta_kcal_7=parseInt((quantidade_7/100)*kcal_7)
      let conta_prot_7=parseInt((quantidade_7/100)*prot_7)
      let conta_gord_7=parseInt((quantidade_7/100)*gord_7)
      let conta_carb_7=parseInt((quantidade_7/100)*carb_7)
      /*valores alimento 2 */
      let kcal_8=document.getElementById('kcal_total_row2_ref_3').value;
      let prot_8=document.getElementById('prot_total_row2_ref_3').value;
      let gord_8=document.getElementById('gord_total_row2_ref_3').value;
      let carb_8=document.getElementById('carb_total_row2_ref_3').value;
      let quantidade_8=document.getElementById('quanti_row2_ref_3').value;
      let conta_kcal_8=parseInt((quantidade_8/100)*kcal_8)
      let conta_prot_8=parseInt((quantidade_8/100)*prot_8)
      let conta_gord_8=parseInt((quantidade_8/100)*gord_8)
      let conta_carb_8=parseInt((quantidade_8/100)*carb_8)
      /*valores alimento 3 */
      let kcal_9=document.getElementById('kcal_total_row3_ref_3').value;
      let prot_9=document.getElementById('prot_total_row3_ref_3').value;
      let gord_9=document.getElementById('gord_total_row3_ref_3').value;
      let carb_9=document.getElementById('carb_total_row3_ref_3').value;
      let quantidade_9=document.getElementById('quanti_row3_ref_3').value;
      let conta_kcal_9=parseInt((quantidade_9/100)*kcal_9)
      let conta_prot_9=parseInt((quantidade_9/100)*prot_9)
      let conta_gord_9=parseInt((quantidade_9/100)*gord_9)
      let conta_carb_9=parseInt((quantidade_9/100)*carb_9)
      /*valores que apareceram para o user */
      let totalkcal_3=Number(conta_kcal_7+conta_kcal_8+conta_kcal_9);
      let totalprot_3=Number(conta_prot_7+conta_prot_8+conta_prot_9);
      let totalgord_3=Number(conta_gord_7+conta_gord_8+conta_gord_9);
      let totalcarb_3=Number(conta_carb_7+conta_carb_8+conta_carb_9);
      if (quantidade_7==0 ||quantidade_8==0 ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_7==0||kcal_8==0){
        alert('Adicione Alimentos ')
      }
      let caloria_do_tree = document.getElementById("calorias_da_ref_tree").innerText = totalkcal_3 ;
      let proteina_do_tree = document.getElementById("proteina_da_ref_tree").innerText = totalprot_3;
      let gordura_do_tree = document.getElementById("gordura_da_ref_tree").innerText = totalgord_3;
      let carboidratos_do_tree = document.getElementById("carboidratos_da_ref_tree").innerText =totalcarb_3;
      break
    case 4:
      /*valores alimento 1 */
      let kcal_10=document.getElementById('kcal_total_row1_ref_4').value;
      let prot_10=document.getElementById('prot_total_row1_ref_4').value;
      let gord_10=document.getElementById('gord_total_row1_ref_4').value;
      let carb_10=document.getElementById('carb_total_row1_ref_4').value;
      let quantidade_10=document.getElementById('quanti_row1_ref_4').value;
      let conta_kcal_10=parseInt((quantidade_10/100)*kcal_10)
      let conta_prot_10=parseInt((quantidade_10/100)*prot_10)
      let conta_gord_10=parseInt((quantidade_10/100)*gord_10)
      let conta_carb_10=parseInt((quantidade_10/100)*carb_10)
      /*valores alimento 2 */
      let kcal_11=document.getElementById('kcal_total_row2_ref_4').value;
      let prot_11=document.getElementById('prot_total_row2_ref_4').value;
      let gord_11=document.getElementById('gord_total_row2_ref_4').value;
      let carb_11=document.getElementById('carb_total_row2_ref_4').value;
      let quantidade_11=document.getElementById('quanti_row2_ref_4').value;
      let conta_kcal_11=parseInt((quantidade_11/100)*kcal_11)
      let conta_prot_11=parseInt((quantidade_11/100)*prot_11)
      let conta_gord_11=parseInt((quantidade_11/100)*gord_11)
      let conta_carb_11=parseInt((quantidade_11/100)*carb_11)
      /*valores alimento 3 */
      let kcal_12=document.getElementById('kcal_total_row3_ref_4').value;
      let prot_12=document.getElementById('prot_total_row3_ref_4').value;
      let gord_12=document.getElementById('gord_total_row3_ref_4').value;
      let carb_12=document.getElementById('carb_total_row3_ref_4').value;
      let quantidade_12=document.getElementById('quanti_row3_ref_4').value;
      let conta_kcal_12=parseInt((quantidade_12/100)*kcal_12)
      let conta_prot_12=parseInt((quantidade_12/100)*prot_12)
      let conta_gord_12=parseInt((quantidade_12/100)*gord_12)
      let conta_carb_12=parseInt((quantidade_12/100)*carb_12)
      /*valores que apareceram para o user */
      let totalkcal_4 = Number(conta_kcal_10+conta_kcal_11+conta_kcal_12);
      let totalprot_4 = Number(conta_prot_10+conta_prot_11+conta_prot_12);
      let totalgord_4 = Number(conta_gord_10+conta_gord_11+conta_gord_12);
      let totalcarb_4 = Number(conta_carb_10+conta_carb_11+conta_carb_12);
      if (quantidade_10==0 ||quantidade_11==0  ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_10==0||kcal_11==0){
        alert('Adicione Alimentos ')
      }
      let caloria_do_four = document.getElementById("calorias_da_ref_four").innerText = totalkcal_4 ;
      let proteina_do_four = document.getElementById("proteina_da_ref_four").innerText = totalprot_4 ;
      let gordura_do_four = document.getElementById("gordura_da_ref_four").innerText = totalgord_4 ;
      let carboidratos_do_four = document.getElementById("carboidratos_da_ref_four").innerText = totalcarb_4 ;
      break
    case 5 :
      /*valores alimento 1 */
      let kcal_13=document.getElementById('kcal_total_row1_ref_5').value;
      let prot_13=document.getElementById('prot_total_row1_ref_5').value;
      let gord_13=document.getElementById('gord_total_row1_ref_5').value;
      let carb_13=document.getElementById('carb_total_row1_ref_5').value;
      let quantidade_13=document.getElementById('quanti_row1_ref_5').value;
      console.log(quantidade_13)
      let conta_kcal_13=parseInt((quantidade_13/100)*kcal_13)
      let conta_prot_13=parseInt((quantidade_13/100)*prot_13)
      let conta_gord_13=parseInt((quantidade_13/100)*gord_13)
      let conta_carb_13=parseInt((quantidade_13/100)*carb_13)
      /*valores alimento 2 */
      let kcal_14=document.getElementById('kcal_total_row2_ref_5').value;
      let prot_14=document.getElementById('prot_total_row2_ref_5').value;
      let gord_14=document.getElementById('gord_total_row2_ref_5').value;
      let carb_14=document.getElementById('carb_total_row2_ref_5').value;
      let quantidade_14=document.getElementById('quanti_row2_ref_5').value;
      console.log(quantidade_14)
      let conta_kcal_14=parseInt((quantidade_14/100)*kcal_14)
      let conta_prot_14=parseInt((quantidade_14/100)*prot_14)
      let conta_gord_14=parseInt((quantidade_14/100)*gord_14)
      let conta_carb_14=parseInt((quantidade_14/100)*carb_14)
      /*valores alimento 3 */
      let kcal_15=document.getElementById('kcal_total_row3_ref_5').value;
      let prot_15=document.getElementById('prot_total_row3_ref_5').value;
      let gord_15=document.getElementById('gord_total_row3_ref_5').value;
      let carb_15=document.getElementById('carb_total_row3_ref_5').value;
      let quantidade_15=document.getElementById('quanti_row3_ref_5').value;
      console.log(quantidade_15)
      let conta_kcal_15=parseInt((quantidade_15/100)*kcal_15)
      let conta_prot_15=parseInt((quantidade_15/100)*prot_15)
      let conta_gord_15=parseInt((quantidade_15/100)*gord_15)
      let conta_carb_15=parseInt((quantidade_15/100)*carb_15)
      /*valores que apareceram para o user */
      let totalkcal_5=Number(conta_kcal_13+conta_kcal_14+conta_kcal_15);
      console.log(totalkcal_5)
      let totalprot_5=Number(conta_prot_13+conta_prot_14+conta_prot_15);
      console.log(totalprot_5)
      let totalgord_5=Number(conta_gord_13+conta_gord_14+conta_gord_15);
      let totalcarb_5=Number(conta_carb_13+conta_carb_14+conta_carb_15);
      if (quantidade_13==0 ||quantidade_14==0  ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_13==0||kcal_14==0){
        alert('Adicione Alimentos ')
      }
      let caloria_do_five = document.getElementById("calorias_da_ref_five").innerText = totalkcal_5  ;
      let proteina_do_five = document.getElementById("proteina_da_ref_five").innerText =totalprot_5 ;
      let gordura_do_five = document.getElementById("gordura_da_ref_five").innerText = totalgord_5 ;
      let carboidratos_do_five = document.getElementById("carboidratos_da_ref_five").innerText = totalcarb_5 ;
      break
    case 6 :
      /*valores alimento 1 */
      let kcal_16=document.getElementById('kcal_total_row1_ref_6').value;
      let prot_16=document.getElementById('prot_total_row1_ref_6').value;
      let gord_16=document.getElementById('gord_total_row1_ref_6').value;
      let carb_16=document.getElementById('carb_total_row1_ref_6').value;
      let quantidade_16=document.getElementById('quanti_row1_ref_6').value;
      let conta_kcal_16=parseInt((quantidade_16/100)*kcal_16)
      let conta_prot_16=parseInt((quantidade_16/100)*prot_16)
      let conta_gord_16=parseInt((quantidade_16/100)*gord_16)
      let conta_carb_16=parseInt((quantidade_16/100)*carb_16)
      /*valores alimento 2 */
      let kcal_17=document.getElementById('kcal_total_row2_ref_6').value;
      let prot_17=document.getElementById('prot_total_row2_ref_6').value;
      let gord_17=document.getElementById('gord_total_row2_ref_6').value;
      let carb_17=document.getElementById('carb_total_row2_ref_6').value;
      let quantidade_17=document.getElementById('quanti_row2_ref_6').value;
      let conta_kcal_17=parseInt((quantidade_17/100)*kcal_17)
      let conta_prot_17=parseInt((quantidade_17/100)*prot_17)
      let conta_gord_17=parseInt((quantidade_17/100)*gord_17)
      let conta_carb_17=parseInt((quantidade_17/100)*carb_17)
      /*valores alimento 3 */
      let kcal_18=document.getElementById('kcal_total_row3_ref_6').value;
      let prot_18=document.getElementById('prot_total_row3_ref_6').value;
      let gord_18=document.getElementById('gord_total_row3_ref_6').value;
      let carb_18=document.getElementById('carb_total_row3_ref_6').value;
      let quantidade_18=document.getElementById('quanti_row3_ref_6').value;
      let conta_kcal_18=parseInt((quantidade_18/100)*kcal_18)
      let conta_prot_18=parseInt((quantidade_18/100)*prot_18)
      let conta_gord_18=parseInt((quantidade_18/100)*gord_18)
      let conta_carb_18=parseInt((quantidade_18/100)*carb_18)
      /*valores que apareceram para o user */
      let totalkcal_6=Number(conta_kcal_16+conta_kcal_17+conta_kcal_18);
      let totalprot_6=Number(conta_prot_16+conta_prot_17+conta_prot_18);
      let totalgord_6=Number(conta_gord_16+conta_gord_17+conta_gord_18);
      let totalcarb_6=Number(conta_carb_16+conta_carb_17+conta_carb_18);
      if (quantidade_16==0 ||quantidade_17==0  ){
        alert('Adicione quantidade nos alimentos ou Adicione os alimentos')
      }else if(kcal_16==0||kcal_17==0){
        alert('Adicione Alimentos ')
      }
      let caloria_do_six = document.getElementById("calorias_da_ref_six").innerText = totalkcal_6  ;
      let proteina_do_six = document.getElementById("proteina_da_ref_six").innerText = totalprot_6 ;
      let gordura_do_six = document.getElementById("gordura_da_ref_six").innerText = totalgord_6 ;
      let carboidratos_do_six = document.getElementById("carboidratos_da_ref_six").innerText = totalcarb_6 ;
      break
  };
};
function limpar_refeicao(numero_da_refeicao){
  switch(Number(numero_da_refeicao)){
    case 1:
      /*alimentos 1*/
      let alimento_row1 = document.getElementById('alimentos_linha_1_ref_1').innerText='';
      let caloria_row1 = document.getElementById('kcal_total_row1_ref_1').value='';
      let proteina_row1 = document.getElementById('prot_total_row1_ref_1').value='';
      let gordura_row1 = document.getElementById('gord_total_row1_ref_1').value='';
      let carboidratos_row1 = document.getElementById('carb_total_row1_ref_1').value='';
      /*alimentos 2*/
      let alimento_row2 = document.getElementById('alimentos_linha_2_ref_1').innerText='';
      let caloria_row2 = document.getElementById('kcal_total_row2_ref_1').value='';
      let proteina_row2 = document.getElementById('prot_total_row2_ref_1').value='';
      let gordura_row2 = document.getElementById('gord_total_row2_ref_1').value='';
      let carboidratos_row2 = document.getElementById('carb_total_row2_ref_1').value='';
      /*alimentos 3*/
      let alimento_row3 = document.getElementById('alimentos_linha_3_ref_1').innerText='';
      let caloria_row3 = document.getElementById('kcal_total_row3_ref_1').value='';
      let proteina_row3 = document.getElementById('prot_total_row3_ref_1').value='';
      let gordura_row3 = document.getElementById('gord_total_row3_ref_1').value='';
      let carboidratos_row3 = document.getElementById('carb_total_row3_ref_1').value='';
      /*macros tela create diet*/
      let caloria_total_table1 = document.getElementById('calorias_da_ref_one').innerText='';
      let proteina_total_table1 = document.getElementById('proteina_da_ref_one').innerText='';
      let gordura_total_table1 = document.getElementById('gordura_da_ref_one').innerText='';
      let carboidratos_total_table1 = document.getElementById('carboidratos_da_ref_one').innerText='';
      /*inputs*/
      let quantidade1_table1 = document.getElementById('quanti_row1_ref_1').value='';
      let quantidade2_table1 = document.getElementById('quanti_row2_ref_1').value='';
      let quantidade3_table1 = document.getElementById('quanti_row3_ref_1').value='';
      break
    case 2:
      /*alimentos 1*/
      let alimento_row4 = document.getElementById('alimentos_linha_1_ref_2').innerText='';
      let caloria_row4 = document.getElementById('kcal_total_row1_ref_2').value='';
      let proteina_row4 = document.getElementById('prot_total_row1_ref_2').value='';
      let gordura_row4 = document.getElementById('gord_total_row1_ref_2').value='';
      let carboidratos_row4 = document.getElementById('carb_total_row1_ref_2').value='';
      /*alimentos 2*/
      let alimento_row5 = document.getElementById('alimentos_linha_2_ref_2').innerText='';
      let caloria_row5 = document.getElementById('kcal_total_row2_ref_2').value='';
      let proteina_row5 = document.getElementById('prot_total_row2_ref_2').value='';
      let gordura_row5 = document.getElementById('gord_total_row2_ref_2').value='';
      let carboidratos_row5 = document.getElementById('carb_total_row2_ref_2').value='';
      /*alimentos 3*/
      let alimento_row6 = document.getElementById('alimentos_linha_3_ref_2').innerText='';
      let caloria_row6 = document.getElementById('kcal_total_row3_ref_2').value='';
      let proteina_row6 = document.getElementById('prot_total_row3_ref_2').value='';
      let gordura_row6 = document.getElementById('gord_total_row3_ref_2').value='';
      let carboidratos_row6 = document.getElementById('carb_total_row3_ref_2').value='';
      /*macros tela create diet*/
      let caloria_total_table2 = document.getElementById('calorias_da_ref_two').innerText='';
      let proteina_total_table2 = document.getElementById('proteina_da_ref_two').innerText='';
      let gordura_total_table2 = document.getElementById('gordura_da_ref_two').innerText='';
      let carboidratos_total_table2 = document.getElementById('carboidratos_da_ref_two').innerText='';
      /*inputs*/
      let quantidade1_table2 = document.getElementById('quanti_row1_ref_2').value='';
      let quantidade2_table2 = document.getElementById('quanti_row2_ref_2').value='';
      let quantidade3_table2 = document.getElementById('quanti_row3_ref_2').value='';
      break  
    case 3:
      /*alimentos 1*/
      let alimento_row7 = document.getElementById('alimentos_linha_1_ref_3').innerText='';
      let caloria_row7 = document.getElementById('kcal_total_row1_ref_3').value='';
      let proteina_row7 = document.getElementById('prot_total_row1_ref_3').value='';
      let gordura_row7 = document.getElementById('gord_total_row1_ref_3').value='';
      let carboidratos_row7 = document.getElementById('carb_total_row1_ref_3').value='';
      /*alimentos 2*/
      let alimento_row8 = document.getElementById('alimentos_linha_2_ref_3').innerText='';
      let caloria_row8 = document.getElementById('kcal_total_row2_ref_3').value='';
      let proteina_row8 = document.getElementById('prot_total_row2_ref_3').value='';
      let gordura_row8 = document.getElementById('gord_total_row2_ref_3').value='';
      let carboidratos_row8 = document.getElementById('carb_total_row2_ref_3').value='';
      /*alimentos 3*/
      let alimento_row9 = document.getElementById('alimentos_linha_3_ref_3').innerText='';
      let caloria_row9 = document.getElementById('kcal_total_row3_ref_3').value='';
      let proteina_row9 = document.getElementById('prot_total_row3_ref_3').value='';
      let gordura_row9 = document.getElementById('gord_total_row3_ref_3').value='';
      let carboidratos_row9 = document.getElementById('carb_total_row3_ref_3').value='';
      /*macros tela create diet*/
      let caloria_total_table3 = document.getElementById('calorias_da_ref_tree').innerText='';
      let proteina_total_table3 = document.getElementById('proteina_da_ref_tree').innerText='';
      let gordura_total_table3 = document.getElementById('gordura_da_ref_tree').innerText='';
      let carboidratos_total_table3 = document.getElementById('carboidratos_da_ref_tree').innerText='';
      /*inputs*/
      let quantidade1_table3 = document.getElementById('quanti_row1_ref_3').value='';
      let quantidade2_table3 = document.getElementById('quanti_row2_ref_3').value='';
      let quantidade3_table3 = document.getElementById('quanti_row3_ref_3').value='';
      break
    case 4:
      /*alimentos 1*/
      let alimento_row10 = document.getElementById('alimentos_linha_1_ref_4').innerText='';
      let caloria_row10 = document.getElementById('kcal_total_row1_ref_4').value='';
      let proteina_row10 = document.getElementById('prot_total_row1_ref_4').value='';
      let gordura_row10 = document.getElementById('gord_total_row1_ref_4').value='';
      let carboidratos_row10 = document.getElementById('carb_total_row1_ref_4').value='';
      /*alimentos 2*/
      let alimento_row11 = document.getElementById('alimentos_linha_2_ref_4').innerText='';
      let caloria_row11 = document.getElementById('kcal_total_row2_ref_4').value='';
      let proteina_row11 = document.getElementById('prot_total_row2_ref_4').value='';
      let gordura_row11 = document.getElementById('gord_total_row2_ref_4').value='';
      let carboidratos_row11 = document.getElementById('carb_total_row2_ref_4').value='';
      /*alimentos 3*/
      let alimento_row12 = document.getElementById('alimentos_linha_3_ref_4').innerText='';
      let caloria_row12 = document.getElementById('kcal_total_row3_ref_4').value='';
      let proteina_row12 = document.getElementById('prot_total_row3_ref_4').value='';
      let gordura_row12 = document.getElementById('gord_total_row3_ref_4').value='';
      let carboidratos_row12 = document.getElementById('carb_total_row3_ref_4').value='';
      /*macros tela create diet*/
      let caloria_total_table4 = document.getElementById('calorias_da_ref_four').innerText='';
      let proteina_total_table4 = document.getElementById('proteina_da_ref_four').innerText='';
      let gordura_total_table4 = document.getElementById('gordura_da_ref_four').innerText='';
      let carboidratos_total_table4 = document.getElementById('carboidratos_da_ref_four').innerText='';
      /*inputs*/
      let quantidade1_table4 = document.getElementById('quanti_row1_ref_4').value='';
      let quantidade2_table4 = document.getElementById('quanti_row2_ref_4').value='';
      let quantidade3_table4 = document.getElementById('quanti_row3_ref_4').value='';
      break
    case 5:
      /*alimentos 1*/
      let alimento_row13 = document.getElementById('alimentos_linha_1_ref_5').innerText='';
      let caloria_row13 = document.getElementById('kcal_total_row1_ref_5').value='';
      let proteina_row13 = document.getElementById('prot_total_row1_ref_5').value='';
      let gordura_row13 = document.getElementById('gord_total_row1_ref_5').value='';
      let carboidratos_row13 = document.getElementById('carb_total_row1_ref_5').value='';
      /*alimentos 2*/
      let alimento_row14 = document.getElementById('alimentos_linha_2_ref_5').innerText='';
      let caloria_row14 = document.getElementById('kcal_total_row2_ref_5').value='';
      let proteina_row14 = document.getElementById('prot_total_row2_ref_5').value='';
      let gordura_row14 = document.getElementById('gord_total_row2_ref_5').value='';
      let carboidratos_row14 = document.getElementById('carb_total_row2_ref_5').value='';
      /*alimentos 3*/
      let alimento_row15 = document.getElementById('alimentos_linha_3_ref_5').innerText='';
      let caloria_row15 = document.getElementById('kcal_total_row3_ref_5').value='';
      let proteina_row15 = document.getElementById('prot_total_row3_ref_5').value='';
      let gordura_row15 = document.getElementById('gord_total_row3_ref_5').value='';
      let carboidratos_row15 = document.getElementById('carb_total_row3_ref_5').value='';
      /*macros tela create diet*/
      let caloria_total_table5 = document.getElementById('calorias_da_ref_five').innerText='';
      let proteina_total_table5 = document.getElementById('proteina_da_ref_five').innerText='';
      let gordura_total_table5 = document.getElementById('gordura_da_ref_five').innerText='';
      let carboidratos_total_table5 = document.getElementById('carboidratos_da_ref_five').innerText='';
      /*inputs*/
      let quantidade1_table5 = document.getElementById('quanti_row1_ref_5').value='';
      let quantidade2_table5 = document.getElementById('quanti_row2_ref_5').value='';
      let quantidade3_table5 = document.getElementById('quanti_row3_ref_5').value='';
      break
    case 6:
      /*alimentos 1*/
      let alimento_row16 = document.getElementById('alimentos_linha_1_ref_6').innerText='';
      let caloria_row16 = document.getElementById('kcal_total_row1_ref_6').value='';
      let proteina_row16 = document.getElementById('prot_total_row1_ref_6').value='';
      let gordura_row16 = document.getElementById('gord_total_row1_ref_6').value='';
      let carboidratos_row16 = document.getElementById('carb_total_row1_ref_6').value='';
      /*alimentos 2*/
      let alimento_row17 = document.getElementById('alimentos_linha_2_ref_6').innerText='';
      let caloria_row17 = document.getElementById('kcal_total_row2_ref_6').value='';
      let proteina_row17 = document.getElementById('prot_total_row2_ref_6').value='';
      let gordura_row17 = document.getElementById('gord_total_row2_ref_6').value='';
      let carboidratos_row17 = document.getElementById('carb_total_row2_ref_6').value='';
      /*alimentos 3*/
      let alimento_row18 = document.getElementById('alimentos_linha_3_ref_6').innerText='';
      let caloria_row18 = document.getElementById('kcal_total_row3_ref_6').value='';
      let proteina_row18 = document.getElementById('prot_total_row3_ref_6').value='';
      let gordura_row18 = document.getElementById('gord_total_row3_ref_6').value='';
      let carboidratos_row18 = document.getElementById('carb_total_row3_ref_6').value='';
      /*macros tela create diet*/
      let caloria_total_table6 = document.getElementById('calorias_da_ref_six').innerText='';
      let proteina_total_table6 = document.getElementById('proteina_da_ref_six').innerText='';
      let gordura_total_table6 = document.getElementById('gordura_da_ref_six').innerText='';
      let carboidratos_total_table6 = document.getElementById('carboidratos_da_ref_six').innerText='';
      /*inputs*/
      let quantidade1_table6 = document.getElementById('quanti_row1_ref_6').value='';
      let quantidade2_table6 = document.getElementById('quanti_row2_ref_6').value='';
      let quantidade3_table6 = document.getElementById('quanti_row3_ref_6').value='';
      break 
  }
};
