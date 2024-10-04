docker kill theme_phoenix_server
docker build -t registry-development.zibma.in/zibma/theme_phoenix_server:dev -f ./Dockerfile .
docker run --name theme_phoenix_server --env NEXT_PUBLIC_BASE_PATH=/abcd --env NEXT_PUBLIC_DISPLAY_SITE_API_URL=https://business-erp-backend-development.zibma.in/api/display/frontend -p 3000:3000 -d registry-development.zibma.in/zibma/theme_phoenix_server:dev
