/**
 * @author TokTokHan, Corp.
 * @Component
 * @module components.Header
 * @description
 */

export interface HeaderProps {
  /**
   * What background color to use
   */
  isCenter?: boolean;
  /**
   * How large should the button be?
   */
  centerPoint: 'pc' | 'tab' | 'mobile';
  /**
   * Button contents
   */
  user: {
    isLogin: boolean;
    nickname: string;
    avatar?: string;
  };
  /**
   * Optional click handler
   */
  fixed: boolean;

  backgroundColor?: string;
  setIsLogin: (val: boolean) => void;
  menuText?: string;
}
