document.getElementById("light").addEventListener("click", function(){storeDisplaySetting("Light"), changeDisplaySetting()});
document.getElementById("dark").addEventListener("click", function(){storeDisplaySetting("Dark"), changeDisplaySetting()} );
document.getElementById("small").addEventListener("click", function(){storeFontSetting("small"), changeTextSize()} );
document.getElementById("mid").addEventListener("click", function(){storeFontSetting("mid"), changeTextSize()} );
document.getElementById("large").addEventListener("click", function(){storeFontSetting("large"), changeTextSize()} );
document.getElementById("open-dyslexic").addEventListener("click", function(){storeFontChange("open-dyslexic"), changeFontChange()} );
document.getElementById("default-font").addEventListener("click", function(){storeFontChange("default-font"), changeFontChange()} );