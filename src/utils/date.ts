export const getAge = (dateString?: string) => {
  if (!dateString) return 0;

  const [day, month, year] = dateString.split('-').map(Number);
  const birthDay = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDay.getFullYear();

  if (
    today.getMonth() < birthDay.getMonth() ||
    (today.getMonth() === birthDay.getMonth() && today.getDate() < day)
  ) {
    age -= 1;
  }

  return age;
};
