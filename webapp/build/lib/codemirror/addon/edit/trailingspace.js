�}Y�
 ' � �	�ᲃqw
��6	�: G^,�֭�^����J��{���Џ�H��5��mt�&`��F-��6����!g	�O���a��S
��t�?�M*q�)`�<���	6w�'v�x343g>�Yk¬|%��9	���?�<ٴ+�q��UZ�^ү<
�Gi�}����k�llQ���S@J�Y:�!�� �s�4~R诃i����}���^D�c��[�{��-�F�� s�5�$�Mւ��Ry��x__�BO�b��|1���������#�Y�-�.38�c9���F[d�th���&��U�w�F]V��Y�S�%�E �ŌU��ؕ�a+����;�A�."h�p	�����A�SR$3�n�!ʋi������=sh��y�h���Ԑ�!�ZR�>G�X���O͏!ኌ��E{��P(�ʰ?@�,C� G Q_(�i��f�ay����&&[����vKCƱ-pk:� �r+�!��::�)9�a�7@������9�> prev) {
    if (prev == CodeMirror.Init) prev = false;
    if (prev && !val)
      cm.removeOverlay("trailingspace");
    else if (!prev && val)
      cm.addOverlay({
        token: function(stream) {
          for (var l = stream.string.length, i = l; i && /\s/.test(stream.string.charAt(i - 1)); --i) {}
          if (i > stream.pos) { stream.pos = i; return null; }
          stream.pos = l;
          return "trailingspace";
        },
        name: "trailingspace"
      });
  });
});
