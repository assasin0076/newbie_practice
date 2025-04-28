import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'], // Укажите расширения файлов здесь
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'], // Игнорируемые файлы
  },

  // Плагины и конфиги
  pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,
  ...pluginOxlint.configs['flat/recommended'],
  skipFormatting,

  // Настройки для Vue
  {
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser', // Убедитесь, что парсер установлен
        extraFileExtensions: ['.vue'], // Поддержка .vue файлов
      },
    },
    rules: {
      // Настройте правила здесь
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // Замена устаревшей опции
    },
  },
)
