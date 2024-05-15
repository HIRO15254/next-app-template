import * as z from 'zod';

import {
  USER_ID_MAX_LENGTH,
  USER_ID_MIN_LENGTH,
  USER_NAME_MAX_LENGTH,
} from '~/const/userConfig';

/**
 * メールアドレスのバリデーション
 * - メールアドレスの形式であること
 */
export const emailValidator = z
  .string()
  .email('メールアドレスの形式が正しくありません');

/**
 * ユーザー名のバリデーション
 * - ユーザー名は1文字以上, `USER_NAME_MAX_LENGTH`文字以内
 * - ユーザー名は半角英数字、ハイフン、アンダースコアのみ使用できる
 */
export const userNameValidator = z
  .string()
  .min(1, 'ユーザー名を入力してください')
  .max(
    USER_NAME_MAX_LENGTH,
    `ユーザー名は${USER_NAME_MAX_LENGTH}文字以内で入力してください`
  );

/**
 * ユーザーIDのバリデーション
 * - ユーザーIDは`USER_ID_MIN_LENGTH`文字以上, `USER_ID_MAX_LENGTH`文字以内
 * - ユーザーIDは半角英数字、ハイフン、アンダースコアのみ使用できる
 */
export const userIdValidator = z
  .string()
  .min(
    USER_ID_MIN_LENGTH,
    `ユーザーIDは${USER_ID_MIN_LENGTH}文字以上で入力してください`
  )
  .max(
    USER_ID_MAX_LENGTH,
    `ユーザーIDは${USER_ID_MAX_LENGTH}文字以内で入力してください`
  )
  .regex(
    /^[a-zA-Z0-9_-]+$/,
    'ユーザーIDには半角英数字、ハイフン、アンダースコアのみ使用できます'
  );
