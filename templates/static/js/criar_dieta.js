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
  let alimentos = alimentos_refeicao(numero_da_ref);
  let alimento_row_1 = alimentos[0];
  let alimento_row_2 = alimentos[1];
  let alimento_row_3 = alimentos[2];
};
function adicionar_alimento(alimento_tabela) {
  let alimento = alimento_tabela.innerText;
  console.log(alimento);
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
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_1"
    ).innerText = alimento);
  } else if (alimento_da_ref_1_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_1"
    ).innerText = alimento);
  } else if (alimento_da_ref_1_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_1"
    ).innerText = alimento);
  } /*refeiçao 2*/ else if (alimento_da_ref_2_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_2"
    ).innerText = alimento);
  } else if (alimento_da_ref_2_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_2"
    ).innerText = alimento);
  } else if (alimento_da_ref_2_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_2"
    ).innerText = alimento);
  } /*refeiçao 3*/ else if (alimento_da_ref_3_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_3"
    ).innerText = alimento);
  } else if (alimento_da_ref_3_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_3"
    ).innerText = alimento);
  } else if (alimento_da_ref_3_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_3"
    ).innerText = alimento);
  } /*refeiçao 4*/ else if (alimento_da_ref_4_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_4"
    ).innerText = alimento);
  } else if (alimento_da_ref_4_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_4"
    ).innerText = alimento);
  } else if (alimento_da_ref_4_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_4"
    ).innerText = alimento);
  } /*refeiçao 5*/ else if (alimento_da_ref_5_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_5"
    ).innerText = alimento);
  } else if (alimento_da_ref_5_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_5"
    ).innerText = alimento);
  } else if (alimento_da_ref_5_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_5"
    ).innerText = alimento);
  } /*refeiçao 6*/ else if (alimento_da_ref_6_row_1 == "") {
    let LABEL_1 = (document.getElementById(
      "alimentos_linha_1_ref_6"
    ).innerText = alimento);
  } else if (alimento_da_ref_6_row_2 == "") {
    let LABEL_2 = (document.getElementById(
      "alimentos_linha_2_ref_6"
    ).innerText = alimento);
  } else if (alimento_da_ref_6_row_3 == "") {
    let LABEL_3 = (document.getElementById(
      "alimentos_linha_3_ref_6"
    ).innerText = alimento);
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
