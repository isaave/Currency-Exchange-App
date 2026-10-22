const escapeCell = (value) => `"${String(value ?? '').replace(/"/g, '""')}"`;

export function toCSV(conversions) {
  const header = ['Data', 'Valor', 'De', 'Para', 'Taxa', 'Valor convertido'];
  const rows = conversions.map((conversion) => [
    conversion.date,
    conversion.amount,
    conversion.base,
    conversion.target,
    conversion.rate,
    conversion.convertedAmount,
  ]);
  const lines = [header, ...rows].map((row) => row.map(escapeCell).join(','));

  return `${lines.join('\r\n')}\r\n`;
}

export function downloadCSV(filename, csv) {
  const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
