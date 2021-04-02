function ipaAnswer(obj, value) {
  var i = 0, o = obj;
  jQuery(obj).siblings('select').val(value);
  while (o != null && o.tagName != 'INPUT') o = o.previousSibling;
  if (o != null) o.value = value;
  o = o.nextSibling;
  while (o != null && o.tagName == 'IMG' && i <= 10) {
      o.src = '/plugins/content/etlap/js/cs' + (++i <= value ? '1' : '0') + '.png';
      o = o.nextSibling;
  }
}

function fillOut() {
  let points = 0;
  for (let select of document.forms[0].getElementsByTagName("select")) {
    if (select.name === "ipa_answer_support[0]") {
      console.debug(`Skipping ${select.name}`);
      continue;
    }
    console.debug("Next question: " + select.name);
    ipaAnswer(select.parentElement.children[11], 10);
    points += 10;
  }
  return points;
}

console.debug("Egeszsegkonyha IPA helper will now fill out the survey for you.");
let points = fillOut();
console.debug(`Done. Will receive ${points} points.`);