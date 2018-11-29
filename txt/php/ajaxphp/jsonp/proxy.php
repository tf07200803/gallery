<?php
if (isset($_GET['url']) && !empty($_GET['url'])) {
// 記得檢查此 URL 是不是你發出的 request
echo file_get_contents($_GET['url']);
}
?>