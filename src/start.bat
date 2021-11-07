@echo off
if exist node_modules\ (
  node rpc.js 
) else (
  npm i discord-rpc
  cls
  node rpc.js
)

