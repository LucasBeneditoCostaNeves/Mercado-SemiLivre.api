import { existsSync, unlinkSync } from 'fs';
import { basename, join } from 'path';
import { AVATAR_UPLOAD_DIR } from './avatarUpload.multer';

export function deleteAvatarFile(avatarUrl: string): void {
  const filePath = join(AVATAR_UPLOAD_DIR, basename(avatarUrl));
  if (existsSync(filePath)) {
    unlinkSync(filePath);
  }
}
