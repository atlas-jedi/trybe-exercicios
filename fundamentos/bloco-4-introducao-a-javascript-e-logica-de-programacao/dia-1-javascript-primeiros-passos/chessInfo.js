function chessInfo(chessPiece){
  if (isNaN(chessPiece)){
    switch (chessPiece.toLowerCase()) {
      case 'bispo':
        return 'todas as diagonais';
        break;
      case 'torre':
        return 'todas as retas';
        break;
      case 'peão':
        return 'reta vertical';
        break;
      case 'rei':
        return 'casas adjacentes';
        break;
      case 'rainha':
        return 'todas as retas, diagonais e casas adjacentes';
        break;
      case 'cavalo':
        return 'anda em formato de L verticalmente ou horizontalmente, em ângulo oposto';
        break;
      default:
        return 'peça inválida';
        break;
    }
  } else {
    console.error('Não é string');
  }
}

console.log(chessInfo('rainha'));