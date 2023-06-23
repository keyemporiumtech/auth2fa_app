import { Injectable } from '@angular/core';
import { BaseService, ApplicationLoggerService, FileService } from '@ddc/kit';

@Injectable()
export class KiFileService extends BaseService {
	filereaded: any;

	constructor(applicationLogger: ApplicationLoggerService, private fileService: FileService) {
		super(applicationLogger);
	}

	getClassName(): string {
		return 'FileService';
	}

	readFile(dir: string, name: string, flags?: any) {
		/*
		this.file
			.resolveDirectoryUrl(dir)
			.then((dirEntry) => {
				this.file.getFile(dirEntry, name, flags).then((entry) => {
					entry.file((file) => {
						this.filereaded = file;
					});
				});
			})
			.catch((err) => {
				this.log.error('Error while reading file ' + dir + '/' + name);
			});
      */
	}

	readFile2(dir: string, name: string, flags?: any) {
		/*
		this.file.resolveDirectoryUrl(dir).then((dirEntry) => {
			return this.file.getFile(dirEntry, name, flags);
		});
    */
	}
}
