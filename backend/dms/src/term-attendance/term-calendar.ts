export interface TermInfo {
  name: string;
  year: number;
  startDate: Date;
  endDate: Date;
  openingDate: Date;
}

export function getCurrentTermInfo(date: Date = new Date()): TermInfo {
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  if (month >= 9) {
    return {
      name: 'Term 1',
      year,
      startDate: new Date(year, 8, 1),
      endDate: new Date(year, 11, 31),
      openingDate: new Date(year, 8, 1),
    };
  }

  if (month >= 5) {
    return {
      name: 'Term 3',
      year,
      startDate: new Date(year, 4, 1),
      endDate: new Date(year, 6, 31),
      openingDate: new Date(year, 4, 1),
    };
  }

  if (month >= 1 && month <= 4) {
    return {
      name: 'Term 2',
      year,
      startDate: new Date(year, 0, 1),
      endDate: new Date(year, 3, 30),
      openingDate: new Date(year, 0, 1),
    };
  }

  return {
    name: 'Term 3',
    year: year - 1,
    startDate: new Date(year - 1, 4, 1),
    endDate: new Date(year - 1, 6, 31),
    openingDate: new Date(year - 1, 4, 1),
  };
}
