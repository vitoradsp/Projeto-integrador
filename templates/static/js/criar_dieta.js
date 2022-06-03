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
function macros_refeicao(numero_da_ref) {
  let valor=numero_da_ref
  switch(valor){
    case 1:
      let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value;
      let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value;
      let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value;
      let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value;
      console.log(valor_do_one_carb)
      let caloria_do_one = document.getElementById("caloria_da_ref_one").innerText = `${valor_do_one_kcal}` ;
      let proteina_do_one = document.getElementById("proteina_da_ref_one").innerText = `${valor_do_one_prot}` ;
      let gordura_do_one = document.getElementById("gordura_da_ref_one").innerText = `${valor_do_one_gord}` ;
      let carboidratos_do_one_carb = document.getElementById("carboidratos_one").innerText = `${valor_do_one_carb}` ;
      console.log(carboidratos_do_one_carb)
      break
    case 2:
      let valor_do_two_kcal = document.getElementById("kcal_total_hidden_two").value;
      let valor_do_two_prot = document.getElementById("prot_total_hidden_two").value;
      let valor_do_two_gord = document.getElementById("gord_total_hidden_two").value;
      let valor_do_two_carb = document.getElementById("carb_total_hidden_two").value;
      let caloria_do_two = document.getElementById("caloria_da_ref_two").innerText = `${valor_do_two_kcal}` ;
      let proteina_do_two = document.getElementById("proteina_da_ref_two").innerText = `${valor_do_two_prot}` ;
      let gordura_do_two = document.getElementById("gordura_da_ref_two").innerText = `${valor_do_two_gord}` ;
      let carboidratos_do_two = document.getElementById("carboidratos_two").innerText = `${valor_do_two_carb}` ;
      break
    case 3:
      let valor_do_tree_kcal = document.getElementById("kcal_total_hidden_tree").value;
      let valor_do_tree_prot = document.getElementById("prot_total_hidden_tree").value;
      let valor_do_tree_gord = document.getElementById("gord_total_hidden_tree").value;
      let valor_do_tree_carb= document.getElementById("carb_total_hidden_tree").value;
      let caloria_do_tree = document.getElementById("caloria_da_ref_tree").innerText = `${valor_do_tree_kcal}` ;
      let proteina_do_tree = document.getElementById("proteina_da_ref_tree").innerText = `${valor_do_tree_prot}` ;
      let gordura_do_tree = document.getElementById("gordura_da_ref_tree").innerText = `${valor_do_tree_gord}`;
      let carboidratos_do_tree = document.getElementById("carboidratos_tree").innerText = `${valor_do_tree_carb}`;
      break
    case 4:
      let valor_do_four_kcal = document.getElementById("kcal_total_hidden_four").value;
      let valor_do_four_prot = document.getElementById("prot_total_hidden_four").value;
      let valor_do_four_gord = document.getElementById("gord_total_hidden_four").value;
      let valor_do_four_carb = document.getElementById("carb_total_hidden_four").value;
      let caloria_do_four = document.getElementById("caloria_da_ref_four").innerText = `${valor_do_four_kcal}` ;
      let proteina_do_four = document.getElementById("proteina_da_ref_four").innerText = `${valor_do_four_prot}` ;
      let gordura_do_four = document.getElementById("gordura_da_ref_four").innerText = `${valor_do_four_gord}` ;
      let carboidratos_do_four = document.getElementById("carboidratos_four").innerText = `${valor_do_four_carb}` ;
      break
    case 5 :
      let valor_do_five_kcal = document.getElementById("kcal_total_hidden_five").value;
      let valor_do_five_prot = document.getElementById("prot_total_hidden_five").value;
      let valor_do_five_gord = document.getElementById("gord_total_hidden_five").value;
      let valor_do_five_carb = document.getElementById("carb_total_hidden_five").value;
      let caloria_do_five = document.getElementById("caloria_da_ref_five").innerText = `${valor_do_five_kcal}` ;
      let proteina_do_five = document.getElementById("proteina_da_ref_five").innerText = `${valor_do_five_prot}` ;
      let gordura_do_five = document.getElementById("gordura_da_ref_five").innerText = `${valor_do_five_gord}` ;
      let carboidratos_do_five = document.getElementById("carboidratos_five").innerText = `${valor_do_five_carb}` ;
      break
    case 6 :
      let valor_do_six_kcal = document.getElementById("kcal_total_hidden_six").value;
      let valor_do_six_prot = document.getElementById("prot_total_hidden_six").value;
      let valor_do_six_gord = document.getElementById("gord_total_hidden_six").value;
      let valor_do_six_carb = document.getElementById("carb_total_hidden_six").value;
      let caloria_do_six = document.getElementById("caloria_da_ref_six ").innerText = `${valor_do_six_kcal}` ;
      let proteina_do_six = document.getElementById("proteina_da_ref_six ").innerText = `${valor_do_six_prot}` ;
      let gordura_do_six = document.getElementById("gordura_da_ref_six ").innerText = `${valor_do_six_gord}` ;
      let carboidratos_do_six = document.getElementById("carboidratos_six ").innerText = `${valor_do_six_carb}` ;
      break
  };
};
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
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_one").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_one").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_one").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_one").value=`${carb_conta}`;
  } else if (alimento_da_ref_1_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_1").innerText = nome_do_alimento);
    let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value;
    let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value;
    let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value;
    let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value;
    let kcal_conta = parseInt( Number(valor_do_one_kcal)+Number(kcal_do_alimentos));
    let prot_conta = parseInt( Number(valor_do_one_prot)+Number(prot_do_alimentos));
    let fat_conta= parseInt( Number(valor_do_one_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt( Number(valor_do_one_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_one").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_one").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_one").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_one").value=`${carb_conta}`
  } else if (alimento_da_ref_1_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_1").innerText = nome_do_alimento);
    let valor_do_one_kcal = document.getElementById("kcal_total_hidden_one").value;
    let valor_do_one_prot = document.getElementById("prot_total_hidden_one").value;
    let valor_do_one_gord = document.getElementById("gord_total_hidden_one").value;
    let valor_do_one_carb = document.getElementById("carb_total_hidden_one").value;
    let kcal_conta = parseInt(Number(valor_do_one_kcal)+Number(kcal_do_alimentos));
    console.log(kcal_conta)
    let prot_conta= parseInt(Number( valor_do_one_prot)+Number(prot_do_alimentos));
    console.log(prot_conta)
    let fat_conta = parseInt(Number( valor_do_one_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_one_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_one").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_one").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_one").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_one").value=`${carb_conta}`
  } /*refeiçao 2*/ else if (alimento_da_ref_2_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_2").innerText = nome_do_alimento);
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_two").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_two").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_two").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_two").value=`${carb_conta}`;
  } else if (alimento_da_ref_2_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_2").innerText = nome_do_alimento);
    let valor_do_two_kcal = document.getElementById("kcal_total_hidden_two").value;
    let valor_do_two_prot = document.getElementById("prot_total_hidden_two").value;
    let valor_do_two_gord = document.getElementById("gord_total_hidden_two").value;
    let valor_do_two_carb = document.getElementById("carb_total_hidden_two").value;
    let kcal_conta = parseInt(Number(valor_do_two_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_two_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_two_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_two_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_two").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_two").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_two").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_two").value=`${carb_conta}`
  } else if (alimento_da_ref_2_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_2").innerText = nome_do_alimento);
    let valor_do_two_kcal = document.getElementById("kcal_total_hidden_two").value;
    let valor_do_two_prot = document.getElementById("prot_total_hidden_two").value;
    let valor_do_two_gord = document.getElementById("gord_total_hidden_two").value;
    let valor_do_two_carb = document.getElementById("carb_total_hidden_two").value;
    let kcal_conta = parseInt(Number(valor_do_two_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_two_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_two_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_two_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_two").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_two").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_two").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_two").value=`${carb_conta}`
  } /*refeiçao 3*/ else if (alimento_da_ref_3_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_3").innerText = nome_do_alimento);
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_tree").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_tree").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_tree").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_tree").value=`${carb_conta}`;
  } else if (alimento_da_ref_3_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_3").innerText = nome_do_alimento);
    let valor_do_tree_kcal = document.getElementById("kcal_total_hidden_tree").value;
    let valor_do_tree_prot = document.getElementById("prot_total_hidden_tree").value;
    let valor_do_tree_gord = document.getElementById("gord_total_hidden_tree").value;
    let valor_do_tree_carb = document.getElementById("carb_total_hidden_tree").value;
    let kcal_conta = parseInt(Number(valor_do_tree_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_tree_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_tree_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_tree_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_tree").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_tree").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_tree").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_tree").value=`${carb_conta}`
  } else if (alimento_da_ref_3_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_3").innerText = nome_do_alimento);
    let valor_do_tree_kcal = document.getElementById("kcal_total_hidden_tree").value;
    let valor_do_tree_prot = document.getElementById("prot_total_hidden_tree").value;
    let valor_do_tree_gord = document.getElementById("gord_total_hidden_tree").value;
    let valor_do_tree_carb = document.getElementById("carb_total_hidden_tree").value;
    let kcal_conta = parseInt(Number(valor_do_tree_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_tree_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_tree_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_tree_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_tree").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_tree").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_tree").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_tree").value=`${carb_conta}`
  } /*refeiçao 4*/ else if (alimento_da_ref_4_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_4").innerText = nome_do_alimento);
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_four").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_four").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_four").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_four").value=`${carb_conta}`;
  } else if (alimento_da_ref_4_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_4").innerText = nome_do_alimento);
    let valor_do_four_kcal = document.getElementById("kcal_total_hidden_four").value;
    let valor_do_four_prot = document.getElementById("prot_total_hidden_four").value;
    let valor_do_four_gord = document.getElementById("gord_total_hidden_four").value;
    let valor_do_four_carb = document.getElementById("carb_total_hidden_four").value;
    let kcal_conta = parseInt(Number(valor_do_four_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_four_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_four_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_four_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_four").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_four").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_four").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_four").value=`${carb_conta}`
  } else if (alimento_da_ref_4_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_4").innerText = nome_do_alimento);
    let valor_do_four_kcal = document.getElementById("kcal_total_hidden_four").value;
    let valor_do_four_prot = document.getElementById("prot_total_hidden_four").value;
    let valor_do_four_gord = document.getElementById("gord_total_hidden_four").value;
    let valor_do_four_carb = document.getElementById("carb_total_hidden_four").value;
    let kcal_conta = parseInt(Number(valor_do_four_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_four_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_four_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_four_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_four").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_four").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_four").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_four").value=`${carb_conta}`

  } /*refeiçao 5*/ else if (alimento_da_ref_5_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_5").innerText = nome_do_alimento);
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_five").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_five").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_five").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_five").value=`${carb_conta}`;
  } else if (alimento_da_ref_5_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_5").innerText = nome_do_alimento);
    let valor_do_five_kcal = document.getElementById("kcal_total_hidden_five").value;
    let valor_do_five_prot = document.getElementById("prot_total_hidden_five").value;
    let valor_do_five_gord = document.getElementById("gord_total_hidden_five").value;
    let valor_do_five_carb = document.getElementById("carb_total_hidden_five").value;
    let kcal_conta = parseInt(Number(valor_do_five_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_five_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_five_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_five_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_five").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_five").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_five").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_five").value=`${carb_conta}`

  } else if (alimento_da_ref_5_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_5").innerText = nome_do_alimento);
    let valor_do_four_kcal = document.getElementById("kcal_total_hidden_four").value;
    let valor_do_four_prot = document.getElementById("prot_total_hidden_four").value;
    let valor_do_four_gord = document.getElementById("gord_total_hidden_four").value;
    let valor_do_four_carb = document.getElementById("carb_total_hidden_four").value;
    let kcal_conta = parseInt(Number(valor_do_four_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_four_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_four_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_four_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_four").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_four").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_four").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_four").value=`${carb_conta}`

  } /*refeiçao 6*/ else if (alimento_da_ref_6_row_1 == "") {
    let LABEL_1 = (document.getElementById("alimentos_linha_1_ref_6").innerText = nome_do_alimento);
    let kcal_conta = parseInt(kcal_do_alimentos);
    let prot_conta = parseInt(prot_do_alimentos);
    let fat_conta= parseInt(gordura_do_alimentos);
    let carb_conta = parseInt(carboidratos_do_alimentos);
    let kcal_1 = document.getElementById("kcal_total_hidden_six").value=`${kcal_conta}`;
    let prot_1 = document.getElementById("prot_total_hidden_six").value=`${prot_conta}`;
    let fat_1 = document.getElementById("gord_total_hidden_six").value=`${fat_conta}`;
    let carb_1 = document.getElementById("carb_total_hidden_six").value=`${carb_conta}`;
  } else if (alimento_da_ref_6_row_2 == "") {
    let LABEL_2 = (document.getElementById("alimentos_linha_2_ref_6").innerText = nome_do_alimento);
    let valor_do_six_kcal = document.getElementById("kcal_total_hidden_six").value;
    let valor_do_six_prot = document.getElementById("prot_total_hidden_six").value;
    let valor_do_six_gord = document.getElementById("gord_total_hidden_six").value;
    let valor_do_six_carb = document.getElementById("carb_total_hidden_six").value;
    let kcal_conta = parseInt(Number(valor_do_six_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_six_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_six_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_six_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_six").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_six").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_six").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_six").value=`${carb_conta}`
  } else if (alimento_da_ref_6_row_3 == "") {
    let LABEL_3 = (document.getElementById("alimentos_linha_3_ref_6").innerText = nome_do_alimento);
    let valor_do_six_kcal = document.getElementById("kcal_total_hidden_six").value;
    let valor_do_six_prot = document.getElementById("prot_total_hidden_six").value;
    let valor_do_six_gord = document.getElementById("gord_total_hidden_six").value;
    let valor_do_six_carb = document.getElementById("carb_total_hidden_six").value;
    let kcal_conta = parseInt(Number(valor_do_six_kcal)+Number(kcal_do_alimentos));
    let prot_conta= parseInt(Number( valor_do_six_prot)+Number(prot_do_alimentos));
    let fat_conta = parseInt(Number( valor_do_six_gord)+Number(gordura_do_alimentos));
    let carb_conta = parseInt(Number( valor_do_six_carb)+Number(carboidratos_do_alimentos));
    let valor_do_kcal = document.getElementById("kcal_total_hidden_six").value=`${kcal_conta}`
    let valor_do_prot = document.getElementById("prot_total_hidden_six").value=`${prot_conta}`
    let valor_do_fat = document.getElementById("gord_total_hidden_six").value=`${fat_conta}`
    let valor_do_carb = document.getElementById("carb_total_hidden_six").value=`${carb_conta}`
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
