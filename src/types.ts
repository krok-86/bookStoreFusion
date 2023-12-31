export interface IRegistrationForm {
    name?: string;
    email?: string;
    password?: string;
    id?: string;
    dob?: Date;
  }

  export interface IRegistrationFormData {
    payload?: {
      data: string;
    };
    userData: IRegistrationForm;
    token?: string;
  }

  export interface IRejectValue {
    data: string;
  }

  export type UrlsType = {
    AUTH: string;
    REG: string;
    MAIN_PAGE:string;
  }
  export type ThemeType = {
    white: {
      colorPrimary?: string;
      colorSecondary: string;
      backgroundColor: string;
      colorText: string;
      colorTextPost: string;
      colorTextInfo: string;
      colorTextPlaceHolder: string;
      backgroundColorPosts: string;
      backgroundColorPost: string;
      backgroundImg: string;
      borderPosts: string;
      borderPost: string;
    },
}