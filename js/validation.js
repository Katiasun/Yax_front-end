/*
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    Yax | Software House Frontend Task - Javascript

    W tym zadaniu postaraj się zaimplementować metody, które sprawdzą, czy dane wprowadzone
    do formularza są poprawne. Przykładowo: czy imię i nazwisko zostało wprowadzone.
    Możesz rozwinąć walidację danych tak bardzo, jak tylko zapragniesz.

    Powodzenia :)
    ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/
function validate_form() {
  let x = document.forms["form"]["name"].value;
  let y = document.forms["form"]["email"].value;

  if (x.length == 0) {
    document.getElementsByTagName("input").innerHTML = "*Wypełnić pole";
    return false;
  }

  if (y.length == 0) {
    document.getElementsByTagName("input").innerHTML = "*Wypełnić pole";
    return false;
  }

  if (at < 1 || dot < 1) {
    document.getElementsByTagName("input").innerHTML =
      "*email wpisany niepoprawnie";
    return false;
  }
}
