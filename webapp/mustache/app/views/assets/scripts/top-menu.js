�}_�
 � .<V�-R��qw
��	�:��(�Ʊp
�s�2/423���J�m���f�h:AY_�|L�L�:���Db%S�./-z�3L'D0V�-��en���+������kNGvud�z����M<�M�����:�QU�Ƥ7���A�}�O~�*��Ғ@�d	��ȶ�k�\۝_)A�ǃ�,!ȶ	2�I��W_��*3af"QqE~5�JI��J(ޮ4��ƽ�	I�#������@-@q�<r�~
�ync�F%T��#�h���=��خ��ʠ�&������2��y�?Dυ5��>n�5L�	G��`4�'�๒��fV٭��
�ؕ�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�>lD-����t��;�n�2��f����t�ɮ@�[�<���z��V��.�vϫQ��?�"B���bX�Ǡ[U�d c2�[gr��ػX�H��Z'��+��,�8�C�7����F�\M?X /a�>}�>l}�F�g���7��5ˏ:~3C�8q���z=hlm_[��(&ϚGӣ�2��a9(������-�S�N�Ov��I�����N��i�S���.�$�y��w䕵�}n�ݦmV"i.��|�<�/���T ��d%�/a�-ނG�6[vQp��AE��W"C泼?�х�C�j����s��+��L�Wn�y�c�3��Q\�ts���t1��@�ϝU�b�}C;�[�kT<������,/���t��jha�$ $�ȋ�SH9��W��L�;�岸�BAj޷�����o����y�����!M�8λ2�� Q,�CT���&�vq��œ�^��O�+
�gP*���;,��J<�Yk�,I��tP��*E 5���7Y��?(�
			}
		}
		else {
			if(done) {
				$sidebar.removeClass('lower-highlight');
				done = false;
			}
		}

		sidebar.style['marginTop'] = (17-scroll)+'px';
	 }).triggerHandler('scroll.ace.top_menu');

 }).triggerHandler('settings.ace.top_menu', ['sidebar_fixed' , $sidebar.hasClass('sidebar-fixed')]);

 $(window).on('resize.ace.top_menu', function() {
	$(document).triggerHandler('settings.ace.top_menu', ['sidebar_fixed' , $sidebar.hasClass('sidebar-fixed')]);
 });


});
