import { GoogleMetrica } from "../../helpers/GoogleMetrica";

export function TapGoogleMetrica(
  currentStep: number,
  course_name: string | undefined | null,
  direction: string | undefined | null
) {
  switch (currentStep) {
    case 1:
      GoogleMetrica("Nedovolen_rabotoi_1", course_name, direction);
      break;
    case 2:
      GoogleMetrica("Format_mesta_raboti_2", course_name, direction);
      break;
    case 3:
      GoogleMetrica("Pozvolit_na_kurse_3", course_name, direction);
      break;
    case 4:
      GoogleMetrica("Prichina_zarabativat_4", course_name, direction);
      break;
    case 5:
      GoogleMetrica("Skolko_zarabativat_5", course_name, direction);
      break;
    case 6:
      GoogleMetrica("Soglasen_utverzhdeniem_6", course_name, direction);
      break;
    case 7:
      GoogleMetrica("Tsifri_trudoustroistva_7", course_name, direction);
      break;
    case 8:
      GoogleMetrica("Otzivi_uchenikov_8", course_name, direction);
      break;
    case 9:
      GoogleMetrica("Kartinki_opisivayut_9", course_name, direction);
      break;
    case 10:
      GoogleMetrica("Pozvolit_zp_grafik_10", course_name, direction);
      break;
    case 11:
      GoogleMetrica("Proekti_seichas_11", course_name, direction);
      break;
    case 12:
      GoogleMetrica("Metch_s_professiei_12", course_name, direction);
      break;
    case 13:
      GoogleMetrica("Naviki_kursa_13", course_name, direction);
      break;
    case 14:
      GoogleMetrica("Rezultati_studentov_14", course_name, direction);
      break;
    case 15:
      GoogleMetrica("Privlekaet_kurs_15", course_name, direction);
      break;
    case 16:
      GoogleMetrica("Rezultati_spikerov_16", course_name, direction);
      break;
    case 17:
      GoogleMetrica("Vremya_na_kurs_17", course_name, direction);
      break;
    case 18:
      GoogleMetrica("Garantiya_trudoustroistva_18", course_name, direction);
      break;
    case 19:
      GoogleMetrica("Sravnenie_s_bez_kursa_19", course_name, direction);
      break;
    case 20:
      GoogleMetrica("Analiz_tselei_20", course_name, direction);
      break;
    case 21:
      GoogleMetrica("Do_posle_kursa_21", course_name, direction);
      break;
    case 22:
      GoogleMetrica("Ostavit_zayavku_22", course_name, direction);
      break;
  }
}
