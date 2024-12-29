import { DataTypes, Model, Optional } from 'sequelize';
import { iFooter, IMenu, IPage, IPhoto } from './@types/Page';
import sequelize from '../../config/database';

type CreateParamsPage = Optional<IPage, 'id' | 'createdAt' | 'updatedAt'>;

class Page extends Model<IPage, CreateParamsPage> {
	public id!: number;
	public images!: IPhoto[];
	public menu!: IMenu;
	public title!: string;
	public footer!: iFooter[];
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
}

Page.init(
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		images: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
		menu: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
		title: {
			type: DataTypes.STRING(50),
			allowNull: false,
		},
		footer: {
			type: DataTypes.JSONB,
			allowNull: false,
		},
	},
	{
		sequelize,
		timestamps: true,
		tableName: 'page_interface',
	},
);
// Page.sync({ force: true });
(async () => {
	await Page.create({
		images: [
			{ title: 'aneis', url: '/images/aneis.jpg' },
			{ title: 'bad', url: '/images/bad.jpg' },
			{ title: 'dark', url: '/images/dark.jpg' },
			{ title: 'game', url: '/images/game.jpg' },
			{ title: 'pinguim', url: '/images/Pinguim.jpg' },
			{ title: 'quarta', url: '/images/quarta.jpg' },
			{ title: 'saul', url: '/images/saul.jpg' },
			{ title: 'soprano', url: '/images/sopranos.jpg' },
			{ title: 'string', url: '/images/string.jpg' },
			{ title: 'the last', url: '/images/the_last.jpg' },
			{ title: 'witcher', url: '/images/witcher.jpg' },
			{ title: 'lost', url: '/images/lost.jpg' },
			{ title: 'office', url: '/images/office.jpg' },
			{ title: '100', url: '/images/100.jpg' },
			{ title: 'viking', url: '/images/viking.jpg' },
			{ title: 'supernatural', url: '/images/supernatural.jpg' },
			{ title: 'arcane', url: '/images/arcane.jpg' },
			{ title: 'simpson', url: '/images/simpson.jpg' },
		],
		menu: {
			public: ['Home', 'Login', 'Sign up'],
			private: ['Populares', 'Novidades'],
		},
		title: 'Clube das Séries',
		footer: [
			{
				id: 1,
				url: 'https://www.instagram.com/_marcosmarinho98/',
				redes: 'Instagram',
			},
			{
				id: 2,
				url: 'https://github.com/marcosfrancomarinho/cubo-serie',
				redes: 'GitHub',
			},
			{
				id: 3,
				url: 'https://www.linkedin.com/in/marcos-franco-marinho-031b55187/',
				redes: 'LinkedIn',
			},
			{
				id: 4,
				url: 'https://www.facebook.com/marcos.marinho.16547/?locale=pt_BR',
				redes: 'Facebook',
			},
		],
	});
})()

export default Page;
