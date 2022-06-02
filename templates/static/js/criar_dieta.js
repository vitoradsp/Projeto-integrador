console.log("javascript entrou");
/* calculos abaixo sobre refeições */

alimentos_refeicao = function (numero_da_ref) {
  switch (numero_da_ref) {
    case 1:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_1");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_1");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_1");
      break;
    case 2:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_2");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_2");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_2");
      break;
    case 3:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_3");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_3");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_3");
      break;
    case 4:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_4");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_4");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_4");
      break;
    case 5:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_5");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_5");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_5");
      break;
    case 6:
      alimentos_1 = document.getElementById("alimentos_linha_1_ref_6");
      alimentos_2 = document.getElementById("alimentos_linha_2_ref_6");
      alimentos_3 = document.getElementById("alimentos_linha_3_ref_6");
      break;
  }
  let alimentos = [alimentos_1, alimentos_2, alimentos];
  return alimentos;
};
macros_refeicao = function (numero_da_ref) {
  switch(numero_da_ref){
    case 1:
      let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value
      let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value
      let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value
      let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value
      break
    case 2:
      break
    case 3:
      break
    case 4:
      break
    case 5 :
      break
    case 6 :
      break
  }
};
function adicionar_alimento(alimento_tabela) {
  let alimento_escolhido = alimento_tabela;
  let nome_do_alimento=alimento_escolhido.querySelector('#td_alimento_1').innerText
  console.log(nome_do_alimento)
  let kcal_do_alimentos=alimento_escolhido.querySelector('.td_kcal').innerText
  console.log(kcal_do_alimentos)
  let prot_do_alimentos=alimento_escolhido.querySelector('.td_prot').innerText
  console.log(prot_do_alimentos)
  let gordura_do_alimentos=alimento_escolhido.querySelector('.td_gordura').innerText
  console.log(gordura_do_alimentos)
  let carboidratos_do_alimentos=alimento_escolhido.querySelector('.td_carb').innerText
  console.log(carboidratos_do_alimentos)

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
    let kcal_1 = document.getElementById("kcal_total_hidden").value=`${kcal_do_alimentos}`;
    console.log(kcal_1)
    let prot_1 = document.getElementById("prot_total_hidden").value=`${prot_do_alimentos}`;
    console.log(prot_1)
    let fat_1 = document.getElementById("gord_total_hidden").value=`${gordura_do_alimentos}`;
    let carb_1 = document.getElementById("carb_total_hidden").value=`${carboidratos_do_alimentos}`;
  } else if (alimento_da_ref_1_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_1").innerText = nome_do_alimento);
    let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value
    let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value
    let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value
    let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value
    let kcal_conta = Number(valor_do_one_kcal+kcal_do_alimentos);
    let prot_conta = Number(valor_do_one_prot+prot_do_alimentos);
    let fat_conta= Number(valor_do_one_gord+gordura_do_alimentos);
    let carb_conta = Number(valor_do_one_carb+carboidratos_do_alimentos);
    let valor_do_kcal = document.getElementById("kcal_total_hidden_one").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_one").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_one").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_one").value=`${carb_conta}`
  } else if (alimento_da_ref_1_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_1").innerText = nome_do_alimento);
    let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value
    let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value
    let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value
    let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value
    let kcal_conta =Number(valor_do_one_kcal+kcal_do_alimentos);
    let prot_conta= Number(valor_do_one_prot+prot_do_alimentos);
    let fat_conta = Number(valor_do_one_gord+gordura_do_alimentos);
    let carb_conta = Number(valor_do_one_carb+carboidratos_do_alimentos);
    let valor_do_kcal = document.getElementById("kcal_total_hidden_one").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_one").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_one").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_one").value=`${carb_conta}`
  } /*refeiçao 2*/ else if (alimento_da_ref_2_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_2"
    ).innerText = nome_do_alimento);

  } else if (alimento_da_ref_2_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_2"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_2_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_2"
    ).innerText = nome_do_alimento);
  } /*refeiçao 3*/ else if (alimento_da_ref_3_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_3"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_3_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_3"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_3_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_3"
    ).innerText = nome_do_alimento);
  } /*refeiçao 4*/ else if (alimento_da_ref_4_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_4"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_4_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_4"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_4_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_4"
    ).innerText = nome_do_alimento);
  } /*refeiçao 5*/ else if (alimento_da_ref_5_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_5"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_5_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_5"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_5_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_5"
    ).innerText = nome_do_alimento);
  } /*refeiçao 6*/ else if (alimento_da_ref_6_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_6"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_6_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_6"
    ).innerText = nome_do_alimento);
  } else if (alimento_da_ref_6_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_6"
    ).innerText = nome_do_alimento);
  } else {
    console.log("FIM");
  }
}
function macros_dieta_user() {
  let proteina_max_diet = document.getElementById(
    "valores_total_de_proteina"
  ).innerHTML;
  let gordura_max_diet = document.getElementById(
    "valores_total_de_gordura"
  ).innerHTML;
  let carboidratos_max_diet = document.getElementById(
    "valores_total_de_carboidratos"
  ).innerHTML;
  let calorias_max_diet = document.getElementById(
    "valor_total_das_kcal"
  ).innerHTML;
  let quantidade_refeicao = document.getElementById(
    "quantidade_de_refeicoes"
  ).value;
  let quantidade_max_proteica_ref = (document.getElementById(
    "proteina_max_ref_user"
  ).innerText = parseInt(proteina_max_diet / quantidade_refeicao));
  let quantidade_max_gordura_ref = (document.getElementById(
    "gordura_max_ref_user"
  ).innerText = parseInt(gordura_max_diet / quantidade_refeicao));
  let quantidade_max_carboidratos_ref = (document.getElementById(
    "carboidratos_max_ref_user"
  ).innerText = parseInt(carboidratos_max_diet / quantidade_refeicao));
  let quantidade_max_calorias_ref = (document.getElementById(
    "calorias_max_ref_user"
  ).innerText = parseInt(calorias_max_diet / quantidade_refeicao));
}
