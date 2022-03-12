import { createGlobalStyle } from "styled-components";

export const darkTheme = {
    body: "#10101C",
    textColor: "#fff",
    headerColor: "#161624",
    blocksColor: "#222235",
    headerSearch: "#222235",
    sidebar: "#161624",
    overlay: "#222235",
    popupColor: "#171717",
    closePopup: "#fff",
    tableSelect: "#222235 !important",
    tr: "#222235",
    pageLink: "#fff",
    burgerBtn: "#fff",
}

export const lightTheme = {
    body: "#F0F2FA",
    textColor: "#171717",
    headerColor: "#fff",
    blocksColor: "#fff",
    headerSearch: "#F0F2FA",
    sidebar: "#0061F7",
    overlay: "#F0F2FA",
    popupColor: "#171717",
    closePopup: "#171717",
    tableSelect: "#fff !important",
    tr: "#fff",
    pageLink: "#000",
    burgerBtn: "#171717",
}

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${props => props.theme.body};
    color: ${props => props.theme.textColor};
    transition: .3s ease;
  }
  .header {
    background-color: ${props => props.theme.headerColor};
  }
  .sidebar {
    background-color: ${props => props.theme.sidebar};
  }
  .block {
    background-color: ${props => props.theme.blocksColor};
  }
  .search-input, .form-control  {
    background-color: ${props => props.theme.headerSearch};
    color: ${props => props.theme.textColor};
  }
  .theme-toggler,
  .notifications {
    background-color: ${props => props.theme.headerSearch};
  }
  .overlay {
    background-color: ${props => props.theme.overlay};
  }
  .close-popup {
    color: ${props => props.theme.closePopup};
  }
  .form__label {
    color: ${props => props.theme.popupColor};
  }
  .table-select {
    background-color: ${props => props.theme.tableSelect};
  }
  .table tr {
    background-color: ${props => props.theme.tr};
  }
  .page-link {
    color: ${props => props.theme.pageLink};
  }
  .burger-btn span {
    background-color: ${props => props.theme.burgerBtn};
  }
`