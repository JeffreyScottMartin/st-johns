export const changeTheme = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};
