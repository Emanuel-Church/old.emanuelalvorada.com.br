menuBar();
scrollnav();
backToTop();
topBtn();
copyright();

function menuBar() {
  const nav = document.querySelector("#header nav");
  const toggle = document.querySelectorAll("nav .toggle");

  for (const element of toggle) {
    element.addEventListener("click", function () {
      nav.classList.toggle("show");
    });
  }

  /* quando clicar em um item do menu, esconder o menu */
  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", function () {
      nav.classList.remove("show");
    });
  }
}

function scrollnav() {
  var $doc = $("html, body");
  $("a").click(function () {
    $doc.animate(
      {
        scrollTop: $($.attr(this, "href")).offset().top,
      },
      500
    );
    return false;
  });
}

function backToTop() {
  const backToTop = document.querySelector("#back-top");
  window.addEventListener("scroll", function () {
    if (window.scrollY >= 560) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  });
}

function topBtn() {
  jQuery(document).ready(function ($) {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $("#back-top").fadeIn();
      } else {
        $("#back-top").fadeOut();
      }
    });
    //Scroll body para 0px ao clicar
    $("#back-top").click(function () {
      $("body,html").animate(
        {
          scrollTop: 0,
        },
        800
      );
      return false;
    });
  });
}

function copyright() {
  const ano = document.getElementById("year");
  const anoAtual = new Date();

  ano.innerHTML = anoAtual.getFullYear();
}

// E-mail valitor
function validacaoEmail(field) {
  usuario = field.value.substring(0, field.value.indexOf("@"));
  dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );

  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    document.getElementById("msgemail").innerHTML = "E-mail v??lido";
    alert("E-mail valido");
  } else {
    document.getElementById("msgemail").innerHTML =
      "<font color='red'>E-mail inv??lido </font>";
    alert("E-mail invalido");
  }
}

// Number Validor
function mascara(o, f) {
  v_obj = o;
  v_fun = f;
  setTimeout("execmascara()", 1);
}

function execmascara() {
  v_obj.value = v_fun(v_obj.value);
}

function mtel(v) {
  v = v.replace(/\D/g, ""); //Remove tudo o que n??o ?? d??gito
  v = v.replace(/^(\d{2})(\d)/g, "($1) $2"); //Coloca par??nteses em volta dos dois primeiros d??gitos
  v = v.replace(/(\d)(\d{4})$/, "$1-$2"); //Coloca h??fen entre o quarto e o quinto d??gitos
  return v;
}

function id(el) {
  return document.getElementById(el);
}

window.onload = function () {
  id("tel").onkeyup = function () {
    mascara(this, mtel);
  };
};