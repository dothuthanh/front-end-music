import {ICategory} from '../category/ICategory';
import {User} from '../user';
import {ISong} from '../song/ISong';

export interface Playlist {
  id?: number;
  name?: string;
  category?: ICategory;
  user?: User;
  views?: number;
  description?: string;
  song?: ISong[];
  isLike?: boolean;
  like?: number;
}
