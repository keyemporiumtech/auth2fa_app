import { StringTranslate } from '@ddc/kit';
import { IonicStyleUtils } from '../../utils/ionic-style-utils';

export class IonicStyleUtilModel {
	size?: string;
	prepend?: string | StringTranslate;
	append?: string | StringTranslate;

	get sizeCol(): object {
		return IonicStyleUtils.getSize(this.size);
	}
}
