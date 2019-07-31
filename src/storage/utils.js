export const addStorageItem = item => {
  if (!localStorage.letters) {
    localStorage.setItem("letters", JSON.stringify([item]));
  } else {
    const letters = JSON.parse(localStorage.letters);
    letters.push(item);
    localStorage.setItem("letters", JSON.stringify(letters));
  }
};
