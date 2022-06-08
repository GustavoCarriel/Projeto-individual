var cont = 0;
var palavras = ['liverpool', 'benzema', '1995', 'oitavas de final', 'oitavas', 'parís', 'paris', '25', 'courtois'];

if (cont == 0) {
  pergunta.innerHTML = 'Clique em "Próxima" para iniciar o jogo"';
}

function avancar(){
    if (cont < 7) {
        cont ++;
        box_resposta.style.display = 'block';
        numeracao.innerHTML = `${cont}`;
        resposta_input.value = '';
        correto_h2.style.display = 'none';
        errado_h2.style.display = 'none';
        if (cont == 1) {
            pergunta.innerHTML = 'O Real Madrid jogou contra qual time na final da Champions de 2021/22?';
        } else if (cont == 2) {
            pergunta.innerHTML = 'Quem foi o artilheiro do campeonato da Champions de 2021/22?';
        } else if (cont == 3) {
            pergunta.innerHTML = 'Quando o campeonato da Champions foi iniciado?';
        } else if (cont == 4) {
            pergunta.innerHTML = 'O time de Neymar (PSG) foi eliminado em que parte da competição? ';
        } else if (cont == 5) {
            pergunta.innerHTML = 'Em qual cidade foi a final da Champions League?';
        } else if (cont == 6) {
            pergunta.innerHTML = 'Quantos títulos o Marcelo (antigo lateral do Real Madrid e lateral Brasileiro) possui após a vitória da Champions League?';
        } else if (cont == 7) {
            pergunta.innerHTML = 'Qual o Goleiro destaque do campeonato e com defesas incríveis?';
        }
    }
}

function voltar(){
    if (cont > 0) {
        cont --;
        numeracao.innerHTML = `${cont}`;
        resposta_input.value = '';
        correto_h2.style.display = 'none';
        errado_h2.style.display = 'none';
        if (cont == 0) {
            pergunta.innerHTML = 'Clique em "Próxima" para iniciar o jogo';
            box_resposta.style.display = 'none';
        } else if (cont == 1) {
            pergunta.innerHTML = 'O Real Madrid jogou contra qual time na final da Champions de 2021/22?';
        } else if (cont == 2) {
            pergunta.innerHTML = 'Quem foi o artilheiro do campeonato da Champions de 2021/22?';
        } else if (cont == 3) {
            pergunta.innerHTML = 'Quando o campeonato da Champions foi iniciado?';
        } else if (cont == 4) {
            pergunta.innerHTML = 'O time de Neymar (PSG) foi eliminado em que parte da competição? ';
        } else if (cont == 5) {
            pergunta.innerHTML = 'Em qual cidade foi a final da Champions League?';
        } else if (cont == 6) {
            pergunta.innerHTML = 'Quantos títulos o Marcelo (antigo lateral do Real Madrid e lateral Brasileiro) possui após a vitória da Champions League?';
        } else if (cont == 7) {
            pergunta.innerHTML = 'Qual o Goleiro destaque do campeonato e com defesas incríveis?';
        }
    }
}
function proximo(){
  if (cont < 7) {
        cont ++;
        box_resposta.style.display = 'block';
        numeracao.innerHTML = `${cont}`;
        resposta_input.value = '';
        correto_h2.style.display = 'none';
        errado_h2.style.display = 'none';
        if (cont == 1) {
            pergunta.innerHTML = 'O Real Madrid jogou contra qual time na final da Champions de 2021/22?';
        } else if (cont == 2) {
            pergunta.innerHTML = 'Quem foi o artilheiro do campeonato da Champions de 2021/22?';
        } else if (cont == 3) {
            pergunta.innerHTML = 'Quando o campeonato da Champions foi iniciado?';
        } else if (cont == 4) {
            pergunta.innerHTML = 'O time de Neymar (PSG) foi eliminado em que parte da competição? ';
        } else if (cont == 5) {
            pergunta.innerHTML = 'Em qual cidade foi a final da Champions League?';
        } else if (cont == 6) {
            pergunta.innerHTML = 'Quantos títulos o Marcelo (antigo lateral do Real Madrid e lateral Brasileiro) possui após a vitória da Champions League?';
        } else if (cont == 7) {
            pergunta.innerHTML = 'Qual o Goleiro destaque do campeonato e com defesas incríveis?';
        }
    }
}
function verificar(){
  var palamenor = resposta_input.value;
  if (cont == 1) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p1_l.innerHTML = 'L';
        p1_i.innerHTML = 'I';
        p1_v.innerHTML = 'V';
        p1_e.innerHTML = 'E';
        p1_r.innerHTML = 'R';
        p1_p.innerHTML = 'P';
        p1_o.innerHTML = 'O';
        p1_o2.innerHTML = 'O';
        p1_l2.innerHTML = 'L';
        proximo();
        break;
        
      }
      else {
    correto_h2.style.display = 'none';
        errado_h2.style.display = 'block';
  }
  }
  } else if (cont == 2) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p2_b.innerHTML = 'B';
        p1_e.innerHTML = 'E';
        p2_n.innerHTML = 'N';
        p2_z.innerHTML = 'Z';
        p2_e.innerHTML = 'E';
        p2_m.innerHTML = 'M';
        p2_a.innerHTML = 'A';
        proximo();
        break;
      } else {
    correto_h2.style.display = 'none';
        errado_h2.style.display = 'block';
  }
    }
  } else if (cont == 3) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p3_1.innerHTML = '1';
        p3_9.innerHTML = '9';
        p3_92.innerHTML = '9';
        p3_5.innerHTML = '5';
        proximo();
        break;
      } else {
    correto_h2.style.display = 'none';
        errado_h2.style.display = 'block';
  }
  }
  } else if (cont == 4) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p1_o.innerHTML = 'O';
        p4_i.innerHTML = 'I';
        p4_t.innerHTML = 'T';
        p4_a.innerHTML = 'A';
        p4_v.innerHTML = 'V';
        p4_a2.innerHTML = 'A';
        p4_s.innerHTML = 'S';
        p4_traco.innerHTML = '-';
        p4_d.innerHTML = 'D';
        p4_e.innerHTML = 'E';
        p4_traco2.innerHTML = '-';
        p4_f.innerHTML = 'F';
        p4_i2.innerHTML = 'I';
        p4_n.innerHTML = 'N';
        p4_a3.innerHTML = 'A';
        p4_l.innerHTML = 'L';
        proximo();
        break;
      } else {
    correto_h2.style.display = 'none';
        errado_h2.style.display = 'block';
  }
  }
  } else if (cont == 5) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p5_p.innerHTML = 'P';
        p4_a3.innerHTML = 'A';
        p5_r.innerHTML = 'R';
        p5_i.innerHTML = 'I';
        p5_s.innerHTML = 'S';
        proximo();
        break;
      } else {
    correto_h2.style.display = 'none';
        errado_h2.style.display = 'block';
  }
  }
  } else if (cont == 6) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p6_2.innerHTML = '2';
        p3_5.innerHTML = '5';
        proximo();
        break;
      }
  }
  } else if (cont == 7) {
    for(var i = 0; i < palavras.length; i ++){
      if (palavras[i] == palamenor.toLowerCase()) {
        alert('Resposta Correta parabéns!');
        p7_c.innerHTML = 'C';
        p7_o.innerHTML = 'O';
        p7_u.innerHTML = 'U';
        p7_r.innerHTML = 'R';
        p7_t.innerHTML = 'T';
        p7_o2.innerHTML = 'O';
        p7_i.innerHTML = 'I';
        p5_s.innerHTML = 'S';
        break;
      }
  }
  } if (p1_l.innerHTML == 'L' && p1_i.innerHTML == 'I' && p1_v.innerHTML == 'V' && p1_e.innerHTML == 'E' && p1_r.innerHTML == 'R' && p1_p.innerHTML == 'P' && p1_o.innerHTML == 'O' && p1_o2.innerHTML == 'O' && p1_l2.innerHTML == 'L' && p2_b.innerHTML == 'B' && p1_e.innerHTML == 'E' && p2_n.innerHTML == 'N' && p2_z.innerHTML == 'Z' && p2_e.innerHTML == 'E' && p2_m.innerHTML == 'M' && p2_a.innerHTML == 'A' && p3_1.innerHTML == '1' && p3_9.innerHTML == '9' && p3_92.innerHTML == '9' && p3_5.innerHTML == '5' && p4_i.innerHTML == 'I' && p4_t.innerHTML == 'T' && p4_a.innerHTML == 'A' && p4_v.innerHTML == 'V' && p4_a2.innerHTML == 'A' && p4_s.innerHTML == 'S' && p4_traco.innerHTML == '-' && p4_d.innerHTML == 'D' && p4_e.innerHTML == 'E' && p4_traco2.innerHTML == '-' && p4_f.innerHTML == 'F' && p4_i2.innerHTML == 'I' && p4_n.innerHTML == 'N' && p4_a3.innerHTML == 'A' && p4_l.innerHTML == 'L' && p5_p.innerHTML == 'P' && p5_r.innerHTML == 'R' && p5_i.innerHTML == 'I' && p5_s.innerHTML == 'S' && p6_2.innerHTML == '2' && p7_c.innerHTML == 'C' && p7_o.innerHTML == 'O' && p7_u.innerHTML == 'U' && p7_r.innerHTML == 'R' && p7_t.innerHTML == 'T' && p7_o2.innerHTML == 'O' && p7_i.innerHTML == 'I') {
    modal_container.style.display = 'block';
  }
}
function fechar(){
    modal_container.style.display = 'none';
}