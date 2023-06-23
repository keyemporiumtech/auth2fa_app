export class IonicStyleUtils {
	static getSize(size: string): object {
		if (!size) {
			return this.getEmptySize();
		}
		let result: any = this.getEmptySize();

		if (size.indexOf('|') !== -1) {
			const pipeExplode = size.split('|');
			if (pipeExplode[0]) {
				result.lg = pipeExplode[0];
			}
			if (pipeExplode[1]) {
				result.md = pipeExplode[1];
			}
			if (pipeExplode[2]) {
				result.sm = pipeExplode[2];
			}
		} else if (size.indexOf('-') !== -1) {
			const minusExplode = size.split('-');
			if (minusExplode[0]) {
				result.xl = minusExplode[0];
			}
			if (minusExplode[1]) {
				result.lg = minusExplode[1];
			}
			if (minusExplode[2]) {
				result.md = minusExplode[2];
			}
			if (minusExplode[3]) {
				result.sm = minusExplode[3];
			}
			if (minusExplode[4]) {
				result.xs = minusExplode[4];
			}
		} else {
			result = { xs: size, sm: size, md: size, lg: size, xl: size };
		}

		return result;
	}

	static getEmptySize(): any {
		return { xs: undefined, sm: undefined, md: undefined, lg: undefined, xl: undefined };
	}
}
