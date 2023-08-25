import { dateFnsLocalizer } from 'react-big-calendar';
import { format, parse, startOfWeek, getDay } from 'date-fns';
// import enUS from 'date-fns/locale/en-US';
import enES from 'date-fns/locale/es';

const locales = {
//   'en-US': enUS,
  'es': enES,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});