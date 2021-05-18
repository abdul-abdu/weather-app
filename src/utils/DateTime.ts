class DateTime extends Date {
	now: any;

	constructor(props: any) {
		super(props);
		this.now = new Date();
	}
}
