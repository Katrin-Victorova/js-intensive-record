import { BaseScreen } from '@/core/component/base-screen.component'
import { $R } from '@/core/rquery/rquery.lib'
import renderService from '@/core/services/render.service'

import styles from './home.module.scss'
import template from './home.template.html'

export class Home extends BaseScreen {
	constructor() {
		super({ title: 'Home' })
	}

	render() {
		const element = renderService.htmlToElement(
			template,
			[
				new Field({
					name: 'mwerg',
					placeholder: 'Enter email',
					variant: 'green'
				}),
				new UserItem({
					avatarPath:
						'https://i.pinimg.com/originals/c8/cc/24/c8cc24bba37a25c009647b8875aae0e3.jpg',
					name: 'Max'
				})
			],
			styles
		)

		$R(element).find('h1').css('color', 'green')

		return element
	}
}
