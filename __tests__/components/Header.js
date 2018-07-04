'use strict';

import 'react-native';
import React from 'react';
import Header, { 
	styles,
 } from '../../components/Header';

import renderer from 'react-test-renderer';
import { 
		shallow, 
} from 'enzyme';

const createTestProps = () => ({
	name: 'InstaBlocks',
	type: 'default',
});

describe('<Header />', () => {
		let wrapper;

		describe('rendering', () => {

			// run before each test
			beforeEach(() => {
				 	wrapper = shallow(<Header {...createTestProps()} />);
			});

			it('renders correctly', () => {
				const tree = renderer.create(<Header />).toJSON();
				expect(tree).toMatchSnapshot();
			});

			it('renders InstaBlocks in the name', () => {
				expect(wrapper.find('Text').contains('InstaBlocks')).toBe(true);
			});

			describe('styling', () => {
				it('should have the title style', () => {
					expect(wrapper.find('Text').prop('style')).toBe(styles['title']);
				});
		});
	});
});
