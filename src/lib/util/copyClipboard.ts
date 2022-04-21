const copyClipboard = (value: string) => {
  const $text = document.createElement('textarea');
  document.body.appendChild($text);
  $text.value = value;

  $text.select();
  document.execCommand('copy');
  document.body.removeChild($text);

  alert('URL이 복사되었습니다!');
};

export default copyClipboard;
