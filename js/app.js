function changeText(iconNumber) {
  var titleElement = document.getElementById("tr-2-0-title-about-2");
  var descriptionElement = document.getElementById("tr-2-0-description-about");

  switch (iconNumber) {
      case 1:
          titleElement.textContent = "ПОВСЯКДЕННИЙ";
          descriptionElement.textContent = "Призначений для щоденної сушки одягу з бавовни та змішаних тканин. Використовуйте його для висушування постільної білизни та різноманітного одягу після прання.";
          break;
      case 2:
          titleElement.textContent = "РУШНИК ";
          descriptionElement.textContent = "Швидко та ефективно висушить будь-який махровий банний рушник, навіть мокрий після прання.";
          break;
      case 3:
          titleElement.textContent = "ДЕЛІКАТНИЙ";
          descriptionElement.textContent = "Якісно та дбайливо висушить речі з шовку та синтетичних тканин. Ідеально впорається з сушкою панчох, хустинок, легеньких блуз.";
          break;
      case 4:
          titleElement.textContent = "ДИТЯЧИЙ ОДЯГ";
          descriptionElement.textContent = "Знахідка для всіх матусь, які виховують непосидючу малечу та немовлят. Цей режим допоможе з сушкою дитячих речей та пелюшок не пошкодивши їх.";
          break;
      case 5:
          titleElement.textContent = "ПОСТІЙНОГО НАГРІВУ";
          descriptionElement.textContent = "Постійний нагрів надає можливість обігріву без обмежень часу та має 3 режими коригування потужності рушникосушарки (мінімальний, середній, та максимальний).";
          break;
      case 6:
          titleElement.textContent = "ECO MODE";
          descriptionElement.textContent = "Вимикає можливість включання постійного нагріву";
          break;
      default:
          break;
  }
}





// TR 2.0 JS
window.onclick = function(event) {
    var modal = document.getElementById("tr-2-0-eco");
    var modalContent = document.getElementById("tr-modal-content-eko");
    if (event.target == modal || event.target == modalContent) {
      modal.style.display = "none";
    }
  };
  
  
  function showModal() {
    document.getElementById("tr-2-0-eco").style.display = "block";
    document.body.style.overflow = "hidden";
  }
  
  function closeModal() {
    document.getElementById("tr-2-0-eco").style.display = "none";
    document.body.style.overflow = "auto";
  }
