import app from "flarum/admin/app";

app.initializers.add("zerosonesfun/flarum-bbcode-button", () => {
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.intro",
      name: "zerosonesfun-bbcode-button.intro",
      type: "text",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.introdesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.introlabel" ),
    },
    9
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.code",
      name: "zerosonesfun-bbcode-button.code",
      type: "textarea",
      placeholder: "[bbcode][/bbcode]",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.codedesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.codelabel" ),
    },
    8
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.icon",
      name: "zerosonesfun-bbcode-button.icon",
      type: "textarea",
      placeholder: "fas fa-font",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.icondesc" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.iconlabel" ),
    },
    7
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.code2",
      name: "zerosonesfun-bbcode-button.code2",
      type: "textarea",
      placeholder: "[bbcode][/bbcode]",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.codedesc2" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.codelabel2" ),
    },
    5
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.icon2",
      name: "zerosonesfun-bbcode-button.icon2",
      type: "text",
      placeholder: "fas fa-font",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.icondesc2" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.iconlabel2" ),
    },
    4
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.code3",
      name: "zerosonesfun-bbcode-button.code3",
      type: "textarea",
      placeholder: "[bbcode][/bbcode]",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.codedesc3" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.codelabel3" ),
    },
    2
  );
  app.extensionData.for("zerosonesfun-bbcode-button").registerSetting(
    {
      setting: "zerosonesfun-bbcode-button.icon3",
      name: "zerosonesfun-bbcode-button.icon3",
      type: "text",
      placeholder: "fas fa-font",
      help: app.translator.trans( "flarum-bbcode-button.admin.settings.icondesc3" ),
      label: app.translator.trans( "flarum-bbcode-button.admin.settings.iconlabel3" ),
    },
    1
  );
});
