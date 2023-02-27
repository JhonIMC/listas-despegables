$(document).ready(function () {
  $(".seccionImportaciones").hide();
  $(".opcionesServicios").hide();
  $(".seccionServTransporte").hide();
  $(".seccionImportOtros").hide();
  $(".seccionTurismoViajes").hide();
  $(".seccionTurismoViajesOtros").hide();
  $(".seccionSeguros").hide();
  $(".seccionSegurosOtros").hide();
  $(".seccionFinancieros").hide();
  $(".seccionCargos").hide();
  $(".seccionCargosOtros").hide();
  $(".seccionTeleInfo").hide();
  $(".seccionTeleInfoOtros").hide();
  $(".seccionServEmp").hide();
  $(".seccionServEmpOtros").hide();
  $(".seccionPerCultRec").hide();
  $(".seccionPerCultRecOtros").hide();
  $(".seccionGobierno").hide();
  $(".seccionGobiernoOtros").hide();
  $(".seccionRenta").hide();
  $(".seccionRentaOtros").hide();
  $(".seccionTransCorrientes").hide();
  $(".seccionTransCorrRemesas").hide();
  $(".seccionTransCorrientesOtros").hide();
  $(".seccionCapitalPrivado").hide();
  $(".seccionCapitalPrivadoCartera").hide();
  $(".seccionCapitalPrivadoInversion").hide();
  $(".seccionCapPrivadoInvOtros").hide();
  $(".seccionCapitalOficial").hide();
  $(".seccionCapitalOficialOtros").hide();
});

function OPCION_DETALLE() {
  var select1 = document.getElementById('opc_detalle').value;

  switch (select1) {
    case "I":
      $(".seccionImportaciones").show();
      $(".opcionesServicios").hide();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").hide();
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "S":
      $(".seccionImportaciones").hide();
      $(".opcionesServicios").show();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").hide();
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "R":
      $(".seccionImportaciones").hide();
      $(".opcionesServicios").hide();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").show();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").hide();
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "T":
      $(".seccionImportaciones").hide();
      $(".opcionesServicios").hide();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").show();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").hide();
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "P":
      $(".seccionImportaciones").hide();
      $(".opcionesServicios").hide();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").show();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").hide();
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "O":
      $(".seccionImportaciones").hide();
      $(".opcionesServicios").hide();
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRenta").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
      $(".seccionCapitalOficial").show();
      $(".seccionCapitalOficialOtros").hide();
    break;
  }
}

function OPCION_SECCION_SERVICIOS() {
  var select2 = document.getElementById('opc_seccion_servicios').value;

  switch (select2) {
    case "M":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "T":
      $(".seccionServTransporte").show();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "TV":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").show();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "C":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "S":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").show();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "F":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").show();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "CP":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").show();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "TI":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").show();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "OS":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").show();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "P":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").show();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").hide();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "G":
      $(".seccionServTransporte").hide();
      $(".seccionImportOtros").hide();
      $(".seccionTurismoViajes").hide();
      $(".seccionTurismoViajesOtros").hide();
      $(".seccionSeguros").hide();
      $(".seccionSegurosOtros").hide();
      $(".seccionFinancieros").hide();
      $(".seccionCargos").hide();
      $(".seccionCargosOtros").hide();
      $(".seccionTeleInfo").hide();
      $(".seccionTeleInfoOtros").hide();
      $(".seccionServEmp").hide();
      $(".seccionServEmpOtros").hide();
      $(".seccionPerCultRec").hide();
      $(".seccionPerCultRecOtros").hide();
      $(".seccionGobierno").show();
      $(".seccionGobiernoOtros").hide();
      $(".seccionRentaOtros").hide();
      $(".seccionTransCorrientes").hide();
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
      $(".seccionCapitalPrivado").hide();
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
  }
}

function OPCION_SERVICIO_TIPO() {
  var select3 = document.getElementById('opc_serv_trans_tipo').value;

  switch (select3) {
    case "P":
      $(".seccionImportOtros").hide();
    break;
    case "C":
      $(".seccionImportOtros").hide();
    break;
    case "PM":
      $(".seccionImportOtros").hide();
    break;
    case "E":
      $(".seccionImportOtros").hide();
    break;
    case "O":
      $(".seccionImportOtros").show();
    break;
  }
}

function OPCION_TURISMO_VIAJES_TIPO() {
  var select4 = document.getElementById('opc_turismo_viajes_tipo').value;

  switch (select4) {
    case "T":
      $(".seccionTurismoViajesOtros").hide();
    break;
    case "N":
      $(".seccionTurismoViajesOtros").hide();
    break;
    case "E":
      $(".seccionTurismoViajesOtros").hide();
    break;
    case "S":
      $(".seccionTurismoViajesOtros").hide();
    break;
    case "O":
      $(".seccionTurismoViajesOtros").show();
    break;
  }
}

function OPCION_SEGUROS() {
  var select5 = document.getElementById('opc_seguros_tipo').value;

  switch (select5) {
    case "SM":
      $(".seccionSegurosOtros").hide();
    break;
    case "SV":
      $(".seccionSegurosOtros").hide();
    break;
    case "SN":
      $(".seccionSegurosOtros").hide();
    break;
    case "R":
      $(".seccionSegurosOtros").hide();
    break;
    case "O":
      $(".seccionSegurosOtros").show();
    break;
  }
}

function OPCION_CARGOS_PROP() {
  var select6 = document.getElementById('opc_cargos_prop').value;

  switch (select6) {
    case "F":
      $(".seccionCargosOtros").hide();
    break;
    case "D":
      $(".seccionCargosOtros").hide();
    break;
    case "L":
      $(".seccionCargosOtros").hide();
    break;
    case "R":
      $(".seccionCargosOtros").hide();
    break;
    case "O":
      $(".seccionCargosOtros").show();
    break;
  }
}

function OPCION_TELE_INFO() {
  var select7 = document.getElementById('opc_tele_info').value;

  switch (select7) {
    case "T":
      $(".seccionTeleInfoOtros").hide();
    break;
    case "E":
      $(".seccionTeleInfoOtros").hide();
    break;
    case "P":
      $(".seccionTeleInfoOtros").hide();
    break;
    case "D":
      $(".seccionTeleInfoOtros").hide();
    break;
    case "O":
      $(".seccionTeleInfoOtros").show();
    break;
  }
}

function OPCION_SERV_EMPR() {
  var select8 = document.getElementById('opc_serv_emp').value;

  switch (select8) {
    case "C":
      $(".seccionServEmpOtros").hide();
    break;
    case "A":
      $(".seccionServEmpOtros").hide();
    break;
    case "AD":
      $(".seccionServEmpOtros").hide();
    break;
    case "R":
      $(".seccionServEmpOtros").hide();
    break;
    case "CL":
      $(".seccionServEmpOtros").hide();
    break;
    case "O":
      $(".seccionServEmpOtros").show();
    break;
  }
}

function OPCION_PER_CULT_REC() {
  var select9 = document.getElementById('opc_per_cult_rec').value;

  switch (select9) {
    case "A":
      $(".seccionPerCultRecOtros").hide();
    break;
    case "P":
      $(".seccionPerCultRecOtros").hide();
    break;
    case "O":
      $(".seccionPerCultRecOtros").show();
    break;
  }
}

function OPCION_GOBIERNO() {
  var select10 = document.getElementById('opc_gobierno').value;

  switch (select10) {
    case "E":
      $(".seccionGobiernoOtros").hide();
    break;
    case "PD":
      $(".seccionGobiernoOtros").hide();
    break;
    case "PV":
      $(".seccionGobiernoOtros").hide();
    break;
    case "O":
      $(".seccionGobiernoOtros").show();
    break;
  }
}

function OPCION_RENTA() {
  var select11 = document.getElementById('opc_renta').value;

  switch (select11) {
    case "R":
      $(".seccionRentaOtros").hide();
    break;
    case "D":
      $(".seccionRentaOtros").hide();
    break;
    case "U":
      $(".seccionRentaOtros").hide();
    break;
    case "ID":
      $(".seccionRentaOtros").hide();
    break;
    case "IT":
      $(".seccionRentaOtros").hide();
    break;
    case "IP":
      $(".seccionRentaOtros").hide();
    break;
    case "O":
      $(".seccionRentaOtros").show();
    break;
  }
}

function OPCION_TRANS_CORRIENTES() {
  var select12 = document.getElementById('opc_trans_corrientes').value;

  switch (select12) {
    case "R":
      $(".seccionTransCorrRemesas").show();
      $(".seccionTransCorrientesOtros").hide();
    break;
    case "D":
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
    break;
    case "P":
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").hide();
    break;
    case "O":
      $(".seccionTransCorrRemesas").hide();
      $(".seccionTransCorrientesOtros").show();
    break;
  }
}

function OPCION_CAPITAL_PRIVADO() {
  var select13 = document.getElementById('opc_capital_privado').value;

  switch (select13) {
    case "ID":
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "IC":
      $(".seccionCapitalPrivadoCartera").show();
      $(".seccionCapitalPrivadoInversion").hide();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "O":
      $(".seccionCapitalPrivadoCartera").hide();
      $(".seccionCapitalPrivadoInversion").show();
      $(".seccionCapPrivadoInvOtros").hide();
    break;
  }
}

function OPCION_CAP_PRIV_INVERSION() {
  var select14 = document.getElementById('opc_cap_priv_inversion').value;

  switch (select14) {
    case "D":
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "LC":
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "CC":
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "PC":
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "PL":
      $(".seccionCapPrivadoInvOtros").hide();
    break;
    case "O":
      $(".seccionCapPrivadoInvOtros").show();
    break;
  }
}

function OPCION_CAPITAL_OFICIAL() {
  var select15 = document.getElementById('opc_capital_oficial').value;

  switch (select15) {
    case "R":
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "D":
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "U":
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "ID":
      $(".seccionCapitalOficialOtros").hide();
    break;
    case "O":
      $(".seccionCapitalOficialOtros").show();
    break;
  }
}