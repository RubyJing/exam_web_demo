�}��
 � ������h�qw
��!	�:G�(�ֱ�f�FE��ֻ��oJ�m?)
N��<ˬO��m�m�@j��r�t-� N	
�*	���lOQKS�ml1N�R���:a�����_��(i+���^eSmY�e׉2���r�iM+?9Ww���m�P�U� �d]���B����,�<�Õ>�gd��<��m��^���j�����;\����wC�16>�W�*0ԃԆw��\C&y9��l�W*�(���
J�������q�̝/^��3{�)"�[�pSB�M4v����ے&��i�5�W'+f�Y�?p)�3�8�4�'�๒��fV٭��
�ؕ�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�>lD)�E�T��X0�O��ǫ���0�(�j!E�_"Ϸ`��Ò���F/b+�Ѹ
H3��V�|#F<��� O�v��8�5�n7	~wU�Ԉquг;���́qod�&��w���B�I�y�}�Z��5�d:+ 7�(fܺ�wV��稜C�T"� ��/P����c�o*-�J.��թ�v'].��iWf����;ǈ��;���7���+�������I"���t�\��%���a� �w'>t��7cȻ��qu����	�c"�Y�Zz�S�lˆ��[$��-;DM�ry��O�s�启���,D}sf��܍�XƷ��]�cB^]#{+V�T���ic���7�@k�D�Cə��v\J�OX	N	���#͜鹲����,���r�*ݒ�@
s����a��K�v����΀(�c{r�i{�y��R����K���i�~/�j$�V�@�Q�:C��꺶~�L�Ӕ���_���٢Oᬀ�m'q��tY(� P.-��u���A���lD-����Ytڌ;�%�
�3��"�f�@�`�[�=߽۳'s���ë�?�Qfb���%�r�<�/�}݉�+��:�N���soJ�C��ě��~ �����*��8#�9��F��O�3�9�Q�͸�Utv��n� �����*�K��S5qtI�Y����`xOL�`�!!�"<T�������:ųa9(�����r�N�U�k��G�ߎ�����z���黏6�vO�}��i��Ȗk#�Լ(ve%s��}�bN�Vҙ�Hd��oN�}k�H��
�}^f#��LL��[8@[���#�����d����=��e��]�T �<�t���*�}}���5o��Yd+��H�k�*@��?CO*��כ���OB���?T���-��$���YL9��PԌ �'���N?״�����e����v�����M1�Raû2�\� ^S�.�A��Ľ�G�rݷ��	k�I:1���"�B��p%0��~Z=���e8~��$�8c�#yL�X���1�0/l�(p>��8̣ǌ�I���?1HQ`��d��>�}�Ixڄ�'!�{�]��:�0���h�w�x������7m�'�./4$�%H��҄jU%��{�P/I��tY��L�;�A�lMr�2H�h�"�{w�:�&6\K�Eڢ��
���i�>R�R�XAh5����R6����2�Di��"�`eXѪ�������!p��g�Q�{��EI��3AD��s960K���c�D�	D
��#{������+ǳ�~����E���N��4˞LG��pL�� =1y���Ijf�Q�h���������L�`'z�/tD����~��#����M�YK�I!��:@�T�_�|xg���'V-�S�e��6�lڌ��X{H������2�,�*�h����i�ȑ.֋Ǜe�a�����|��u��_pov�6QҜ�$�,����
Q��5���ʞ:̚�~l�2V�����d�5׀���v�՗�g�$Y����K	�d�!?�nt, ui) {
			//when an element is moved, it's parent becomes empty with almost zero height.
			//we set a min-height for it to be large enough so that later we can easily drop elements back onto it
			ui.item.parent().css({'min-height':ui.item.height()})
			//ui.sender.css({'min-height':ui.item.height() , 'background-color' : '#F5F5F5'})
		},
		update: function(event, ui) {
			ui.item.parent({'min-height':''})
			//p.style.removeProperty('background-color');
		}
    });
	


});